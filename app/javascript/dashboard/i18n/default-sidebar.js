import { frontendURL } from '../helper/URLHelper';

export const getSidebarItems = accountId => ({
  common: {
    routes: [
      'home',
      'inbox_dashboard',
      'inbox_conversation',
      'conversation_through_inbox',
      'contacts_dashboard',
      'leads_dashboard',
      'contacts_dashboard_manage',
      'notifications_dashboard',
      'settings_account_reports',
      'profile_settings',
      'profile_settings_index',
      'label_conversations',
      'conversations_through_label',
      'team_conversations',
      'conversations_through_team',
      'notifications_index',
      'post_form',
      'admin_dashboard',
      'entity',
    ],
    menuItems: {
      assignedToMe: {
        icon: 'ion-chatbox-working',
        label: 'CONVERSATIONS',
        hasSubMenu: false,
        key: '',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
        toolTip: 'Conversation from all subscribed inboxes',
        toStateName: 'home',
      },
      contacts: {
        icon: 'ion-person',
        label: 'CONTACTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/contacts`),
        toStateName: 'contacts_dashboard',
      },
      leads: {
        icon: 'ios-bookmarks',
        label: 'LEADS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/leads`),
        toStateName: 'leads_dashboard',
      },
      notifications: {
        icon: 'ion-ios-bell',
        label: 'NOTIFICATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/notifications`),
        toStateName: 'notifications_dashboard',
      },
      report: {
        icon: 'ion-arrow-graph-up-right',
        label: 'REPORTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports`),
        toStateName: 'settings_account_reports',
      },
      settings: {
        icon: 'ion-settings',
        label: 'SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings`),
        toStateName: 'settings_home',
      },
      posts: {
        icon: "ion-share",
        label: "POSTS",
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/dashboard/posts`),
        toStateName: "contacts_dashboard",
      },
      admin: {
        icon: 'ion-android-desktop',
        label: 'ADMIN',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/admin`),
        toStateName: 'admin_dashboard',
      },
      entity: {
        icon: 'ion-android-desktop',
        label: 'ENTITY',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/entity`),
        toStateName: 'entity',
      },
    },
  },
  settings: {
    routes: [
      'agent_list',
      'canned_list',
      'tag_list',
      'group_list',
      'labels_list',
      'settings_inbox',
      'settings_inbox_new',
      'settings_inbox_list',
      'settings_inbox_show',
      'settings_inboxes_page_channel',
      'settings_inboxes_add_agents',
      'settings_inbox_finish',
      'settings_integrations',
      'settings_integrations_webhook',
      'settings_integrations_integration',
      'settings_applications',
      'settings_applications_webhook',
      'settings_applications_integration',
      'general_settings',
      'general_settings_index',
      'settings_teams_list',
      'settings_teams_new',
      'settings_teams_add_agents',
      'settings_teams_finish',
      'settings_teams_edit',
      'settings_teams_edit_members',
      'settings_teams_edit_finish',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      agents: {
        icon: 'ion-person-stalker',
        label: 'AGENTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
        toStateName: 'agent_list',
      },
      tags: {
        icon: 'ion-pricetags',
        label: 'TAGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/tags/list`),
        toStateName: 'tag_list',
      },
      groups: {
        icon: 'ion-person-stalker',
        label: 'GROUPS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/groups/list`),
        toStateName: 'group_list',
      },
      teams: {
        icon: 'ion-ios-people',
        label: 'TEAMS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/teams/list`),
        toStateName: 'settings_teams_list',
      },
      inboxes: {
        icon: 'ion-archive',
        label: 'INBOXES',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
        toStateName: 'settings_inbox_list',
      },
      labels: {
        icon: 'ion-pricetags',
        label: 'LABELS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/labels/list`),
        toStateName: 'labels_list',
      },
      cannedResponses: {
        icon: 'ion-chatbox-working',
        label: 'CANNED_RESPONSES',
        hasSubMenu: false,
        toState: frontendURL(
          `accounts/${accountId}/settings/canned-response/list`
        ),
        toStateName: 'canned_list',
      },
      settings_integrations: {
        icon: 'ion-flash',
        label: 'INTEGRATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/integrations`),
        toStateName: 'settings_integrations',
      },
      settings_applications: {
        icon: 'ion-asterisk',
        label: 'APPLICATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/applications`),
        toStateName: 'settings_applications',
      },
      general_settings_index: {
        icon: 'ion-gear-a',
        label: 'ACCOUNT_SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/general`),
        toStateName: 'general_settings_index',
      },
    },
  },
  admin: {
    routes: [
      'admin_dashboard_fields',
      'admin_dashboard_tags',
      'admin_dashboard_groups',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      fields: {
        icon: 'ion-document',
        label: 'FIELDS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/admin/fields`),
        toStateName: 'admin_dashboard_fields',
      },
      tags: {
        icon: 'ion-pricetags',
        label: 'TAGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/admin/tags`),
        toStateName: 'admin_dashboard_tags',
      },
      groups: {
        icon: 'ion-compose',
        label: 'GROUPS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/admin/groups`),
        toStateName: 'admin_dashboard_groups',
      },
    },
  },
  entity: {
    routes: [
      'entity_leads',
    ],
    menuItems: {
      back: {
        icon: 'ion-ios-arrow-back',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      leads: {
        icon: 'ion-ios-more',
        label: 'LEADS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/entity/leads`),
        toStateName: 'entity_leads'
      }
    }
  }
});
