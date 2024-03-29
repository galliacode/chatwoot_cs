<template>
  <div class="create-edit-field" v-if="openModal">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form ref="cf_form" :class="toggleOutline ? 'new-field' : 'edit-field'"
      @submit.prevent="handleSubmit(submit)">
        <div class="md-layout">
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
            <ValidationProvider
              name="label"
              rules="required|min:3"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <label style="font-weight: 700;">Label:</label>
                <md-input name='label' v-model="data.label" type="text"></md-input>
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
              </md-field>
            </ValidationProvider>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
            <ValidationProvider
              name="as"
              rules="required"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
                <multiselect
                  name="as"
                  v-model="data.as"
                  placeholder="Select type..."
                  :multiple="false" :taggable="true"
                  :options="Object.keys(fieldAs)"
                >
                </multiselect>
              </md-field>
            </ValidationProvider>
          </div>

          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
            <md-checkbox v-model="data.disabled"><label style="font-weight: 700;">Disabled:</label></md-checkbox>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
            <md-checkbox v-model="data.required"><label style="font-weight: 700;">Rrequired:</label></md-checkbox>
          </div>

          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
          v-if="show"
          >
            <ValidationProvider
              name="minlen"
              :rules="`required|between:0,100|diff:${data.maxlength}`"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <label style="font-weight: 700;">MinLength:</label>
                <md-input name='minlen' v-model="data.minlength" type="number"></md-input>
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
              </md-field>
            </ValidationProvider>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
          v-if="show"
          >
            <ValidationProvider
              name="maxlen"
              :rules="`required|between:0,1000|diff:${data.minlength}, 1`"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <label style="font-weight: 700;">MaxLength:</label>
                <md-input name='maxlen' v-model="data.maxlength" type="number"></md-input>
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
              </md-field>
            </ValidationProvider>
          </div>

          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50">
            <ValidationProvider
              name="hint"
              rules="required"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <label style="font-weight: 700;">Hint:</label>
                <md-input name='hint' v-model="data.hint" type="text"></md-input>
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
              </md-field>
            </ValidationProvider>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
          v-if="show"
          >
            <ValidationProvider
              name="placeholder"
              rules="required"
              v-slot="{ passed, failed }"
            >
              <md-field :class="[{ 'md-error': failed }, { 'md-valid': passed }]">
                <label style="font-weight: 700;">Placeholder:</label>
                <md-input name='placeholder' v-model="data.placeholder" type="text"></md-input>
                <md-icon class="error" v-show="failed">close</md-icon>
                <md-icon class="success" v-show="passed">done</md-icon>
              </md-field>
            </ValidationProvider>
          </div>


          <md-progress-bar md-mode="indeterminate" v-if="sending" />
          <br />
          <div class="md-layout">
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50 float-left">
              <md-button type="submit" class="md-success md-raised md-dense w-100">
                {{field.id === 'new' ? 'create' : 'update'}}
              </md-button>
            </div>
            <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50 float-right">
              <md-button class="md-primary md-raised md-dense w-100" :disabled="sending" @click="cancel">cancel</md-button>
            </div>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {ADMIN_FIELD_AS, AF_FORM_HIDDEN} from '../../../../common/config.js'
import { extend, Validator } from "vee-validate";
import { required, min, max, digits, between } from "vee-validate/dist/rules";

extend("required", required);
extend("min", min);
extend('max', max);
extend('digits', digits);
extend('between', between);
extend("diff", {
  computesRequired: true,
  validate: (value, {compare, dir}) => {
    if (dir) return Number(value) > Number(compare)
    else return Number(value) <= Number(compare)
  },
  params: ['compare', 'dir'],
  message: ""
});

export default {
  name: 'create-edit-field',
  props: {
    gid: {
      type: Number,
      default: null
    },
    openModal: {
      type: Boolean,
      default: false
    },
    field: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      toggleOutline: false,
      fieldAs: ADMIN_FIELD_AS,
      horb: AF_FORM_HIDDEN,
      show: true,
      data: {},
      sending: false
    };
  },
  computed: {
    wOpenModal: props => props.openModal,
    wDataAs: data => data.data.as
  },
  watch: {
    wOpenModal(newValue, oldValue) {
      if (newValue) {
        this.toggleOutline = this.$props.field.id === 'new' ? true : false
        this.data = this.$props.field
        let inx = Object.values(this.fieldAs).indexOf(this.data.as)
        if (inx > -1) this.data.as = Object.keys(this.fieldAs)[inx]
        else delete this.data.as
      }
    },
    wDataAs(newValue, oldValue) {
      this.show = this.horb[this.fieldAs[newValue]] ? false : true
    }
  },
  methods: {
    clearForm() {
      this.data = {}
      this.sending = false
      this.$refs.cf_form.reset();
    },
    submit() {
      this.sending = true
      let keys = ['label', 'as', 'required', 'disabled', 'hint'];
      if (this.show) keys = keys.concat(['minlength', 'maxlength', 'placeholder']);
      let formData = new FormData();
      for (const k in this.data) {
        if (keys.find(m => m === k)) {
          if (k === 'as') formData.append(`field[${k}]`, this.fieldAs[this.data[k]]);
          else if (k === 'minlength' || k === 'maxlength') formData.append(`field[${k}]`, Number(this.data[k]));
          else if (k === 'required' || k === 'disabled') formData.append(`field[${k}]`, this.data[k] ? 1 : 0);
          else formData.append(`field[${k}]`, this.data[k]);
        }
      }
      formData.append(`field[field_group_id]`, this.$props.gid)
      Promise.all([
        this.data.id === 'new'
        ? this.$store.dispatch('adFields/fCreate', formData)
        : this.$store.dispatch('adFields/fUpdate', {id: this.data.id, formData}),
        this.$store.dispatch('adTags/get')
      ]).then(() => {
        this.$store.dispatch('global/setMsg', `${this.data.id === 'new' ? 'Added' : 'Updated'} "${JSON.stringify(this.data.label)}" field!`)
      })
    },
    cancel() {
      this.$emit('closeCEFieldModal')
      this.clearForm()
    }
  }
};
</script>
<style lang="scss">
  .create-edit-field {
    .new-field {
      outline: solid 2px green;
    }
    .edit-field {
      outline: dashed 1px darkgrey
    }
    .md-progress-bar {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  }
</style>




