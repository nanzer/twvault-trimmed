﻿// SELECT name FROM feature.translation_key
// text.trim().replace(/"([^"]+)"/g, (_, name) => `${name}: "${name}",`)
let translationCodes = {
    TAB_SEND_STACKS: "TAB_SEND_STACKS",
    TAB_TOOLS: "TAB_TOOLS",
    TAB_FAKE_SCRIPT: "TAB_FAKE_SCRIPT",
    TAB_FIND_BACKTIMES: "TAB_FIND_BACKTIMES",
    TAB_UPLOAD: "TAB_UPLOAD",
    ACTIONS_SNIPES_NONE: "ACTIONS_SNIPES_NONE",
    ACTIONS_SNIPES_DESCRIPTION: "ACTIONS_SNIPES_DESCRIPTION",
    ACTIONS_SNIPES_NUM_NOBLES: "ACTIONS_SNIPES_NUM_NOBLES",
    ACTIONS_STACKS_NONE: "ACTIONS_STACKS_NONE",
    ACTIONS_STACKS_EATABLE_NUKES: "ACTIONS_STACKS_EATABLE_NUKES",
    ACTIONS_QUICK_SUPPORT_DESCRIPTION: "ACTIONS_QUICK_SUPPORT_DESCRIPTION",
    ACTIONS_QUICK_SUPPORT_SETTINGS_1: "ACTIONS_QUICK_SUPPORT_SETTINGS_1",
    ACTIONS_QUICK_SUPPORT_SETTINGS_2: "ACTIONS_QUICK_SUPPORT_SETTINGS_2",
    ACTIONS_QUICK_SUPPORT_SETTINGS_3: "ACTIONS_QUICK_SUPPORT_SETTINGS_3",
    ACTIONS_REQUEST_STACK_DESCRIPTION: "ACTIONS_REQUEST_STACK_DESCRIPTION",
    ACTIONS_REQUEST_STACK_SETTINGS_1: "ACTIONS_REQUEST_STACK_SETTINGS_1",
    ACTIONS_REQUEST_STACK_SETTINGS_2: "ACTIONS_REQUEST_STACK_SETTINGS_2",
    ACTIONS_REQUEST_STACK_SETTINGS_3: "ACTIONS_REQUEST_STACK_SETTINGS_3",
    ADMIN_TRIBE_STATS_25_NUKES: "ADMIN_TRIBE_STATS_25%_NUKES",
    ADMIN_TRIBE_STATS_50_NUKES: "ADMIN_TRIBE_STATS_50%_NUKES",
    ADMIN_TRIBE_STATS_75_NUKES: "ADMIN_TRIBE_STATS_75%_NUKES",
    ADMIN_TRIBE_STATS_TOTAL_FULL_NUKES: "ADMIN_TRIBE_STATS_TOTAL_FULL_NUKES",
    ADMIN_TRIBE_STATS_TOTAL_NOBLES: "ADMIN_TRIBE_STATS_TOTAL_NOBLES",
    ADMIN_LOG_REVOKED_PRIVELEGES_FOR: "ADMIN_LOG_REVOKED_PRIVELEGES_FOR",
    ADMIN_LOG_GAVE_PRIVELEGES_TO: "ADMIN_LOG_GAVE_PRIVELEGES_TO",
    ADMIN_LOG_RE_ENABLED_KEY_FOR: "ADMIN_LOG_RE_ENABLED_KEY_FOR",
    ADMIN_LOG_DISABLED_KEY_FOR: "ADMIN_LOG_DISABLED_KEY_FOR",
    ADMIN_LOG_CHANGED_KEY_OWNER: "ADMIN_LOG_CHANGED_KEY_OWNER",
    ADMIN_LOG_SET_READ_ONLY: "ADMIN_LOG_SET_READ_ONLY",
    ADMIN_LOG_REMOVED_READ_ONLY: "ADMIN_LOG_REMOVED_READ_ONLY",
    ADMIN_LOG_CHANGED_SERVER: "ADMIN_LOG_CHANGED_SERVER",
    ADMIN_LOG_CLEARED_ADMIN: "ADMIN_LOG_CLEARED_ADMIN",
    ADMIN_LOG_ASSIGNED_ADMIN: "ADMIN_LOG_ASSIGNED_ADMIN",
    ADMIN_LOG_CHANGED_ADMIN: "ADMIN_LOG_CHANGED_ADMIN",
    ADMIN_LOG_UNKNOWN_CHANGE: "ADMIN_LOG_UNKNOWN_CHANGE",
    ADMIN_LOG_DELETED_KEY: "ADMIN_LOG_DELETED_KEY",
    ADMIN_PLAYER_NOT_FOUND_NAME: "ADMIN_PLAYER_NOT_FOUND_NAME",
    ADMIN_PLAYER_NOT_FOUND_ID: "ADMIN_PLAYER_NOT_FOUND_ID",
    ADMIN_PLAYER_NAME_NOT_SET: "ADMIN_PLAYER_NAME_NOT_SET",
    ADMIN_PLAYER_NOT_IN_TRIBE: "ADMIN_PLAYER_NOT_IN_TRIBE",
    ADMIN_PLAYER_HAS_KEY: "ADMIN_PLAYER_HAS_KEY",
    ADMIN_INVALID_KEY: "ADMIN_INVALID_KEY",
    ADMIN_KEY_NOT_FOUND: "ADMIN_KEY_NOT_FOUND",
    ADMIN_DELETE_OWN_KEY: "ADMIN_DELETE_OWN_KEY",
    ADMIN_DELETE_OTHER_ADMIN: "ADMIN_DELETE_OTHER_ADMIN",
    ADMIN_CHANGE_OWN_KEY: "ADMIN_CHANGE_OWN_KEY",
    ADMIN_CHANGE_OTHER_ADMIN: "ADMIN_CHANGE_OTHER_ADMIN",
    LANDS_AT: "LANDS_AT",
    BACKTIME_BB_CODE_HOVER: "BACKTIME_BB_CODE_HOVER",
    BACKTIME_UPLOAD_DATA_REQUIRED: "BACKTIME_UPLOAD_DATA_REQUIRED",
    INCOMINGS: "INCOMINGS",
    COMMANDS: "COMMANDS",
    BB_TABLE: "BB_TABLE",
    TRIGGERED_CAPTCHA: "TRIGGERED_CAPTCHA",
    IS_IN_GROUP: "IS_IN_GROUP",
    FILTER_APPLIED: "FILTER_APPLIED",
    ORDERED_MONTHS: "ORDERED_MONTHS",
    OFFENSE: "OFFENSE",
    REPORTS_CHECK_UPLOADED: "REPORTS_CHECK_UPLOADED",
    REPORTS_LA_NOT_FOUND: "REPORTS_LA_NOT_FOUND",
    REPORTS_LOOT_ASSISTANT: "REPORTS_LOOT_ASSISTANT",
    REPORTS_FILTERING_LA: "REPORTS_FILTERING_LA",
    REPORTS_LA_ERROR: "REPORTS_LA_ERROR",
    REPORTS_SKIPPED_OLD: "REPORTS_SKIPPED_OLD",
    REPORTS_ERROR_CHECK_OLD: "REPORTS_ERROR_CHECK_OLD",
    REPORTS_FINISHED: "REPORTS_FINISHED",
    REPORTS_NONE_NEW: "REPORTS_NONE_NEW",
    REPORTS_PROGRESS: "REPORTS_PROGRESS",
    TROOPS_COLLECTING_PAGES: "TROOPS_COLLECTING_PAGES",
    TROOPS_FIND_ACADEMY: "TROOPS_FIND_ACADEMY",
    TROOPS_NO_ACADEMY: "TROOPS_NO_ACADEMY",
    TROOPS_FIND_POSSIBLE_NOBLES: "TROOPS_FIND_POSSIBLE_NOBLES",
    TROOPS_FIND_SUPPORT: "TROOPS_FIND_SUPPORT",
    TROOPS_COLLECTING_SUPPORT: "TROOPS_COLLECTING_SUPPORT",
    TROOPS_ERROR_FINDING_ACADEMY: "TROOPS_ERROR_FINDING_ACADEMY",
    TROOPS_NOBLES_LIMIT: "TROOPS_NOBLES_LIMIT",
    TROOPS_ERROR_GETTING_NOBLES: "TROOPS_ERROR_GETTING_NOBLES",
    TROOPS_UPLOADING: "TROOPS_UPLOADING",
    UPLOAD_ERROR: "UPLOAD_ERROR",
    TROOPS_FINISHED: "TROOPS_FINISHED",
    TROOPS_UPLOADING_SUPPORT: "TROOPS_UPLOADING_SUPPORT",
    REPORT_LOYALTY_FROM_TO: "REPORT_LOYALTY_FROM_TO",
    REPORT_BUILDING_DAMAGE: "REPORT_BUILDING_DAMAGE",
    REPORT_WALL_DAMAGE: "REPORT_WALL_DAMAGE",
    TROOPS_NOBLES_NUM_VILLAGES: "TROOPS_NOBLES_NUM_VILLAGES",
    TAB_NOBLE_TARGETS: "TAB_NOBLE_TARGETS",
    TAB_USELESS_STACKS: "TAB_USELESS_STACKS",
    TAB_QUICK_SUPPORT: "TAB_QUICK_SUPPORT",
    TAB_REQUEST_STACK: "TAB_REQUEST_STACK",
    TAB_ADMIN: "TAB_ADMIN",
    TAB_ENEMY_TRIBES: "TAB_ENEMY_TRIBES",
    TAB_MANAGE_USERS: "TAB_MANAGE_USERS",
    TAB_TRIBE_STATS: "TAB_TRIBE_STATS",
    TAB_LOG: "TAB_LOG",
    TAB_STATS: "TAB_STATS",
    TAB_ME: "TAB_ME",
    ACTIONS_STACKS_DESCRIPTION: "ACTIONS_STACKS_DESCRIPTION",
    ACTIONS_STACKS_POSSIBLE_NUKES: "ACTIONS_STACKS_POSSIBLE_NUKES",
    ACTIONS_STACKS_CURRENT_STRENGTH: "ACTIONS_STACKS_CURRENT_STRENGTH",
    ACTIONS_NOBLE_TARGETS_NONE: "ACTIONS_NOBLE_TARGETS_NONE",
    ACTIONS_NOBLE_TARGETS_DV_AGE: "ACTIONS_NOBLE_TARGETS_DV_AGE",
    ACTIONS_NOBLE_TARGETS_DESCRIPTION: "ACTIONS_NOBLE_TARGETS_DESCRIPTION",
    ACTIONS_NOBLE_TARGETS_STATIONED_DVS: "ACTIONS_NOBLE_TARGETS_STATIONED_DVS",
    ACTIONS_NOBLE_TARGETS_DVS_SEEN_AT: "ACTIONS_NOBLE_TARGETS_DVS_SEEN_AT",
    ACTIONS_USELESS_STACKS_NONE: "ACTIONS_USELESS_STACKS_NONE",
    ACTIONS_USELESS_STACKS_DESCRIPTION: "ACTIONS_USELESS_STACKS_DESCRIPTION",
    ACTIONS_USELESS_STACKS_POP_COUNT: "ACTIONS_USELESS_STACKS_POP_COUNT",
    ADMIN_REMOVE_ENEMY: "ADMIN_REMOVE_ENEMY",
    ERROR_LOADING_ENEMY_TRIBES: "ERROR_LOADING_ENEMY_TRIBES",
    ADMIN_NAME_OF_TRIBE: "ADMIN_NAME_OF_TRIBE",
    ADMIN_TRIBE_NOT_FOUND: "ADMIN_TRIBE_NOT_FOUND",
    ADMIN_TRIBE_ALREADY_EXISTS: "ADMIN_TRIBE_ALREADY_EXISTS",
    ADMIN_ENEMY_TRIBES: "ADMIN_ENEMY_TRIBES",
    ADMIN_ENEMY_TRIBES_DESCRIPTION: "ADMIN_ENEMY_TRIBES_DESCRIPTION",
    ADMIN_ADD_ENEMY_TRIBE: "ADMIN_ADD_ENEMY_TRIBE",
    ADMIN_NEW_KEY: "ADMIN_NEW_KEY",
    ADMIN_NEW_VAULT_SCRIPT: "ADMIN_NEW_VAULT_SCRIPT",
    ADMIN_TRIBE_STATS_DESCRIPTION: "ADMIN_TRIBE_STATS_DESCRIPTION",
    ADMIN_TRIBE_STATS_SETTINGS_NUKES: "ADMIN_TRIBE_STATS_SETTINGS_NUKES",
    ADMIN_USER_LOG: "ADMIN_USER_LOG",
    ADMIN_MANAGE_USERS_ENTER_NAME: "ADMIN_MANAGE_USERS_ENTER_NAME",
    ADMIN_MANAGE_USERS_GIVE_ADMIN: "ADMIN_MANAGE_USERS_GIVE_ADMIN",
    ADMIN_MANAGE_USERS_REVOKE_ADMIN: "ADMIN_MANAGE_USERS_REVOKE_ADMIN",
    ADMIN_MANAGE_USERS_CONFIRM_DELETE: "ADMIN_MANAGE_USERS_CONFIRM_DELETE",
    ADMIN_MANAGE_USERS_CONFIRM_REMOVE_ADMIN: "ADMIN_MANAGE_USERS_CONFIRM_REMOVE_ADMIN",
    ADMIN_MANAGE_USERS_CONFIRM_GIVE_ADMIN: "ADMIN_MANAGE_USERS_CONFIRM_GIVE_ADMIN",
    ADMIN_MANAGE_USERS_VAULT_SCRIPT_FOR: "ADMIN_MANAGE_USERS_VAULT_SCRIPT_FOR",
    ADMIN_TRIBE_STATS_TOTAL_POSSIBLE_NOBLES: "ADMIN_TRIBE_STATS_TOTAL_POSSIBLE_NOBLES",
    ADMIN_TRIBE_STATS_TOTAL_DVS: "ADMIN_TRIBE_STATS_TOTAL_DVS",
    ADMIN_TRIBE_STATS_TOTAL_INCS: "ADMIN_TRIBE_STATS_TOTAL_INCS",
    ADMIN_TRIBE_STATS_TOTAL_ATTACKS: "ADMIN_TRIBE_STATS_TOTAL_ATTACKS",
    ADMIN_TRIBE_STATS_NEEDS_UPLOAD: "ADMIN_TRIBE_STATS_NEEDS_UPLOAD",
    ADMIN_TRIBE_STATS_FULL_NUKES: "ADMIN_TRIBE_STATS_FULL_NUKES",
    ADMIN_TRIBE_STATS_NUKES_TRAVELING: "ADMIN_TRIBE_STATS_NUKES_TRAVELING",
    ADMIN_TRIBE_STATS_OWNED_DVS: "ADMIN_TRIBE_STATS_OWNED_DVS",
    ADMIN_TRIBE_STATS_DVS_HOME: "ADMIN_TRIBE_STATS_DVS_HOME",
    ADMIN_TRIBE_STATS_BACKLINE_DVS_HOME: "ADMIN_TRIBE_STATS_BACKLINE_DVS_HOME",
    ADMIN_TRIBE_STATS_DVS_TRAVELING: "ADMIN_TRIBE_STATS_DVS_TRAVELING",
    ADMIN_TRIBE_STATS_DVS_TO_SELF: "ADMIN_TRIBE_STATS_DVS_TO_SELF",
    ADMIN_TRIBE_STATS_DVS_TO_OTHERS: "ADMIN_TRIBE_STATS_DVS_TO_OTHERS",
    ADMIN_TRIBE_STATS_OFF_VILLAS: "ADMIN_TRIBE_STATS_OFF_VILLAS",
    ADMIN_TRIBE_STATS_DEF_VILLAS: "ADMIN_TRIBE_STATS_DEF_VILLAS",
    ADMIN_TRIBE_STATS_NUM_INCS: "ADMIN_TRIBE_STATS_NUM_INCS",
    ADMIN_TRIBE_STATS_NUM_ATTACKS: "ADMIN_TRIBE_STATS_NUM_ATTACKS",
    ADMIN_TRIBE_STATS_DVS_TO_TRIBE: "ADMIN_TRIBE_STATS_DVS_TO_TRIBE",
    WORKING: "WORKING",
    GET_SCRIPT: "GET_SCRIPT",
    TIME_HOUR_SHORT: "TIME_HOUR_SHORT",
    TIME_MINUTE_SHORT: "TIME_MINUTE_SHORT",
    TIME_SECOND_SHORT: "TIME_SECOND_SHORT",
    TIME_DAY_PLURAL_SHORT: "TIME_DAY_PLURAL_SHORT",
    OWNER: "OWNER",
    TRIBE: "TRIBE",
    SEARCH: "SEARCH",
    RESULTS: "RESULTS",
    DELETE: "DELETE",
    KEYS: "KEYS",
    USER_NAME: "USER_NAME",
    ADMIN: "ADMIN",
    NO_TRIBE: "NO_TRIBE",
    YES: "YES",
    PLAYER: "PLAYER",
    NO_PLAYERS_FOUND: "NO_PLAYERS_FOUND",
    CURRENT_TRIBE: "CURRENT_TRIBE",
    DOWNLOAD: "DOWNLOAD",
    EVENT: "EVENT",
    TIME: "TIME",
    SERVER_TIME: "SERVER_TIME",
    MESSAGE: "MESSAGE",
    ADD: "ADD",
    OPTIONAL: "OPTIONAL",
    SAVE: "SAVE",
    STATS_LOAD_ERROR: "STATS_LOAD_ERROR",
    STATS_7_DAYS: "STATS_7_DAYS",
    NUKES: "NUKES",
    FANGS: "FANGS",
    STATS_TRAVELING_LANDED: "STATS_TRAVELING_LANDED",
    DEFENSE: "DEFENSE",
    POSSIBLE_NOBLES: "POSSIBLE_NOBLES",
    TAB_HIGH_SCORES: "TAB_HIGH_SCORES",
    TAB_SUPPORT: "TAB_SUPPORT",
    TAB_TERMS: "TAB_TERMS",
    TIME_TODAY_AT: "TIME_TODAY_AT",
    TIME_TOMORROW_AT: "TIME_TOMORROW_AT",
    TIME_ON: "TIME_ON",
    TIME_ON_AT: "TIME_ON_AT",
    TIME_DATE_FORMAT: "TIME_DATE_FORMAT",
    TIME_DAY_SHORT: "TIME_DAY_SHORT",
    TIME_NUMERIC_DATE: "TIME_NUMERIC_DATE",
    BUILDING_BARRACKS: "BUILDING_BARRACKS",
    UNIT_RAM: "UNIT_RAM",
    UNIT_RAM_ALIASES: "UNIT_RAM_ALIASES",
    UNIT_CATAPULT: "UNIT_CATAPULT",
    UNIT_CATAPULT_ALIASES: "UNIT_CATAPULT_ALIASES",
    UNIT_SPEAR: "UNIT_SPEAR",
    UNIT_SPEAR_ALIASES: "UNIT_SPEAR_ALIASES",
    UNIT_SWORD: "UNIT_SWORD",
    UNIT_SWORD_ALIASES: "UNIT_SWORD_ALIASES",
    UNIT_AXE: "UNIT_AXE",
    UNIT_AXE_ALIASES: "UNIT_AXE_ALIASES",
    UNIT_ARCHER: "UNIT_ARCHER",
    UNIT_ARCHER_ALIASES: "UNIT_ARCHER_ALIASES",
    UNIT_SPY: "UNIT_SPY",
    UNIT_SPY_ALIASES: "UNIT_SPY_ALIASES",
    UNIT_LIGHT_CAV: "UNIT_LIGHT_CAV",
    UNIT_LIGHT_CAV_ALIASES: "UNIT_LIGHT_CAV_ALIASES",
    STATS_NUM_DVS: "STATS_NUM_DVS",
    STATS_DVS_AT_HOME: "STATS_DVS_AT_HOME",
    STATS_BACKLINE_DVS_AT_HOME: "STATS_BACKLINE_DVS_AT_HOME",
    STATS_DVS_TRAVELING: "STATS_DVS_TRAVELING",
    SUPPORT: "SUPPORT",
    RANKINGS_LOAD_ERROR: "RANKINGS_LOAD_ERROR",
    RANKINGS: "RANKINGS",
    TERMS_NOT_INNO: "TERMS_NOT_INNO",
    TERMS_DETAILS: "TERMS_DETAILS",
    DYNAMIC_FAKE_SCRIPTS: "DYNAMIC_FAKE_SCRIPTS",
    BACKTIME_RESULTS: "BACKTIME_RESULTS",
    BACKTIME_MIN_ATTACK_SIZE_1: "BACKTIME_MIN_ATTACK_SIZE_1",
    BACKTIME_MIN_ATTACK_SIZE_2: "BACKTIME_MIN_ATTACK_SIZE_2",
    BACKTIME_MAX_TRAVEL_TIME: "BACKTIME_MAX_TRAVEL_TIME",
    BACKTIME_MAX_NUM_TIMINGS: "BACKTIME_MAX_NUM_TIMINGS",
    BACKTIME_HIDE_HANDLED_NUKES: "BACKTIME_HIDE_HANDLED_NUKES",
    BACKTIME_HIDE_STACKED_NUKES: "BACKTIME_HIDE_STACKED_NUKES",
    BACKTIME_WORKING: "BACKTIME_WORKING",
    BACKTIME_DESCRIPTION_1: "BACKTIME_DESCRIPTION_1",
    BACKTIME_DESCRIPTION_2: "BACKTIME_DESCRIPTION_2",
    BACKTIME_MIN_RETURNING_POPULATION: "BACKTIME_MIN_RETURNING_POPULATION",
    PLAYERS: "PLAYERS",
    TRIBES: "TRIBES",
    CONTINENTS: "CONTINENTS",
    FAKES_DIST_LABEL: "FAKES_DIST_LABEL",
    FAKES_DIST_FIELDS_FROM: "FAKES_DIST_FIELDS_FROM",
    GET_COORDS: "GET_COORDS",
    FAKES_MIN_COORD: "FAKES_MIN_COORD",
    FAKES_MAX_COORD: "FAKES_MAX_COORD",
    WAITING: "WAITING",
    UNEXPECTED_ERROR: "UNEXPECTED_ERROR",
    UPLOAD: "UPLOAD",
    PROGRESS: "PROGRESS",
    DETAILS: "DETAILS",
    REPORTS: "REPORTS",
    UPLOAD_DESCRIPTION_REPORTS: "UPLOAD_DESCRIPTION_REPORTS",
    UPLOAD_DESCRIPTION_INCS: "UPLOAD_DESCRIPTION_INCS",
    UPLOAD_DESCRIPTION_COMMANDS: "UPLOAD_DESCRIPTION_COMMANDS",
    UPLOAD_DESCRIPTION_TROOPS: "UPLOAD_DESCRIPTION_TROOPS",
    UPLOAD_CACHE_CLEARED: "UPLOAD_CACHE_CLEARED",
    UPLOAD_DESCRIPTION: "UPLOAD_DESCRIPTION",
    UPLOAD_ALL: "UPLOAD_ALL",
    UPLOAD_CLEAR_CACHE: "UPLOAD_CLEAR_CACHE",
    COMMANDS_COLLECTING_PAGES: "COMMANDS_COLLECTING_PAGES",
    COMMANDS_FINISHED: "COMMANDS_FINISHED",
    REPORTS_PAGES_PROGRESS: "REPORTS_PAGES_PROGRESS",
    COMMANDS_NONE_NEW: "COMMANDS_NONE_NEW",
    COMMANDS_CHECK_UPLOADED: "COMMANDS_CHECK_UPLOADED",
    COMMANDS_UPLOADING: "COMMANDS_UPLOADING",
    COMMANDS_CHECK_UPLOADED_FAILED: "COMMANDS_CHECK_UPLOADED_FAILED",
    COMMANDS_SKIPPED_OLD: "COMMANDS_SKIPPED_OLD",
    INCOMINGS_COLLECTING_PAGES: "INCOMINGS_COLLECTING_PAGES",
    INCOMINGS_PROGRESS: "INCOMINGS_PROGRESS",
    INCOMINGS_UPLOADING: "INCOMINGS_UPLOADING",
    INCOMINGS_FINISHED: "INCOMINGS_FINISHED",
    REPORTS_COLLECTING_PAGES: "REPORTS_COLLECTING_PAGES",
    REPORTS_COLLECTING_LINKS: "REPORTS_COLLECTING_LINKS",
    COMMANDS_PROGRESS: "COMMANDS_PROGRESS",
    ADMIN_LOG_ADDED_KEY_FOR: "ADMIN_LOG_ADDED_KEY_FOR",
    TIME_HOUR_PLURAL_SHORT: "TIME_HOUR_PLURAL_SHORT",
    OPEN_VAULT: "OPEN_VAULT",
    ARRIVAL_TIME: "ARRIVAL_TIME",
    ARRIVES_IN: "ARRIVES_IN",
    REQUIRE_PREMIUM_ACCOUNT: "REQUIRE_PREMIUM_ACCOUNT",
    TERMS_AND_CONDITIONS: "TERMS_AND_CONDITIONS",
    RE_RUN_SCRIPT: "RE_RUN_SCRIPT",
    SCRIPT_NOT_RAN: "SCRIPT_NOT_RAN",
    UPDATE_NOTICE: "UPDATE_NOTICE",
    UPLOAD_COMMANDS_REQUIRED: "UPLOAD_COMMANDS_REQUIRED",
    UPLOAD_INCOMINGS_REQUIRED: "UPLOAD_INCOMINGS_REQUIRED",
    UPLOAD_REPORTS_REQUIRED: "UPLOAD_REPORTS_REQUIRED",
    UPLOAD_TROOPS_REQUIRED: "UPLOAD_TROOPS_REQUIRED",
    UPLOAD_DATA_REQUIRED_REASONS: "UPLOAD_DATA_REQUIRED_REASONS",
    ERROR_OCCURRED: "ERROR_OCCURRED",
    TROOPS: "TROOPS",
    SOURCE_VILLAGE: "SOURCE_VILLAGE",
    LAUNCH_TIME: "LAUNCH_TIME",
    LANDING_TIME: "LANDING_TIME",
    TROOP_REQUIRED: "TROOP_REQUIRED",
    VAULT: "VAULT",
    VAULT_INTERFACE_DESCRIPTION: "VAULT_INTERFACE_DESCRIPTION",
    DONE: "DONE",
    INCS_NOT_TAGGED: "INCS_NOT_TAGGED",
    TAG_UPLOAD_DATA_REQUIRED: "TAG_UPLOAD_DATA_REQUIRED",
    FEATURE_IS_EXPERIMENTAL: "FEATURE_IS_EXPERIMENTAL",
    UPLOAD_VISIBLE_INCOMINGS: "UPLOAD_VISIBLE_INCOMINGS",
    TAG_CODE_HEADER: "TAG_CODE_HEADER",
    TAG_CODE_DETAILS: "TAG_CODE_DETAILS",
    TAG_CODE_TROOP_NAME_DETAILS: "TAG_CODE_TROOP_NAME_DETAILS",
    TAG_CODE_TAG_TYPE_DETAILS: "TAG_CODE_TAG_TYPE_DETAILS",
    TAG_CODE_POP_PERCENT_DETAILS: "TAG_CODE_POP_PERCENT_DETAILS",
    TAG_CODE_POP_COUNT_DETAILS: "TAG_CODE_POP_COUNT_DETAILS",
    TAG_CODE_POP_RETURN_PERCENT_DETAILS: "TAG_CODE_POP_RETURN_PERCENT_DETAILS",
    TAG_CODE_POP_RETURN_COUNT_DETAILS: "TAG_CODE_POP_RETURN_COUNT_DETAILS",
    TAG_CODE_NUM_CATS_DETAILS: "TAG_CODE_NUM_CATS_DETAILS",
    TAG_CODE_NUM_COMS_DETAILS: "TAG_CODE_NUM_COMS_DETAILS",
    TAG_CODE_SRC_PLAYER_DETAILS: "TAG_CODE_SRC_PLAYER_DETAILS",
    TAG_CODE_SRC_VILLAGE_DETAILS: "TAG_CODE_SRC_VILLAGE_DETAILS",
    TAG_CODE_TGT_PLAYER_DETAILS: "TAG_CODE_TGT_PLAYER_DETAILS",
    TAG_CODE_TGT_VILLAGE_DETAILS: "TAG_CODE_TGT_VILLAGE_DETAILS",
    TAG_CODE_SRC_COORDS_DETAILS: "TAG_CODE_SRC_COORDS_DETAILS",
    TAG_CODE_TGT_COORDS_DETAILS: "TAG_CODE_TGT_COORDS_DETAILS",
    TAG_CODE_VILLAGE_TYPE_DETAILS: "TAG_CODE_VILLAGE_TYPE_DETAILS",
    TAG_CODE_CUSTOM_LABEL_DETAILS: "TAG_CODE_CUSTOM_LABEL_DETAILS",
    TAG_CFG_FORMAT: "TAG_CFG_FORMAT",
    RESET: "RESET",
    TAG_CFG_ONLY_UNLABELED: "TAG_CFG_ONLY_UNLABELED",
    TAG_CFG_AUTOTAG_FAKE_1: "TAG_CFG_AUTOTAG_FAKE_1",
    TAG_CFG_AUTOTAG_FAKE_2: "TAG_CFG_AUTOTAG_FAKE_2",
    TAG_CFG_IGNORE_NO_DATA: "TAG_CFG_IGNORE_NO_DATA",
    TAG_ALL: "TAG_ALL",
    TAG_SELECTED: "TAG_SELECTED",
    TAG_REVERT: "TAG_REVERT",
    CANCEL: "CANCEL",
    TAG_DURATION_NOTICE: "TAG_DURATION_NOTICE",
    NOT_A_NUMBER: "NOT_A_NUMBER",
    FAKE_DETECTION_CONFIRM: "FAKE_DETECTION_CONFIRM",
    NO_INCOMINGS_SELECTED: "NO_INCOMINGS_SELECTED",
    TAGS_ARE_CURRENT: "TAGS_ARE_CURRENT",
    TAGGING_CANCELED: "TAGGING_CANCELED",
    TAGGING_PROGRESS: "TAGGING_PROGRESS",
    TAG_STATE_RUNNING: "TAG_STATE_RUNNING",
    TAG_STATE_FINISHED: "TAG_STATE_FINISHED",
    TAG_STATE_CANCELED: "TAG_STATE_CANCELED",
    UNKNOWN: "UNKNOWN",
    FAKES: "FAKES",
    FAKE: "FAKE",
    MAYBE_NUKE: "MAYBE_NUKE",
    MAP_USING_VAULT: "MAP_USING_VAULT",
    MAP_HIGHLIGHT_ANY: "MAP_HIGHLIGHT_ANY",
    MAP_HIGHLIGHT_NO: "MAP_HIGHLIGHT_NO",
    MAP_HIGHLIGHT_ENEMY: "MAP_HIGHLIGHT_ENEMY",
    MAP_UPLOAD_DATA_REQUIRED: "MAP_UPLOAD_DATA_REQUIRED",
    MAP_HOVER_CMD_FAKES: "MAP_HOVER_CMD_FAKES",
    MAP_HOVER_CMD_NUKES: "MAP_HOVER_CMD_NUKES",
    MAP_HOVER_CMD_NOBLES: "MAP_HOVER_CMD_NOBLES",
    MAP_HOVER_CMD_DVS: "MAP_HOVER_CMD_DVS",
    MAP_HOVER_CMD_NUM_PLAYERS: "MAP_HOVER_CMD_NUM_PLAYERS",
    MAP_HOVER_ARMY_AT_HOME: "MAP_HOVER_ARMY_AT_HOME",
    MAP_HOVER_ARMY_STATIONED: "MAP_HOVER_ARMY_STATIONED",
    MAP_HOVER_ARMY_TRAVELING: "MAP_HOVER_ARMY_TRAVELING",
    MAP_HOVER_ARMY_OWNED: "MAP_HOVER_ARMY_OWNED",
    MAP_HOVER_ARMY_POSSIBLE_RECRUIT: "MAP_HOVER_ARMY_POSSIBLE_RECRUIT",
    MAP_HOVER_NUKE_ESTIMATE: "MAP_HOVER_NUKE_ESTIMATE",
    MAP_HOVER_SEEN_AT: "MAP_HOVER_SEEN_AT",
    MAP_HOVER_LATEST_LEVELS: "MAP_HOVER_LATEST_LEVELS",
    MAP_HOVER_POSSIBLE_LEVELS: "MAP_HOVER_POSSIBLE_LEVELS",
    MAP_HOVER_LOYALTY: "MAP_HOVER_LOYALTY",
    MAP_HOVER_LATEST_LOYALTY: "MAP_HOVER_LATEST_LOYALTY",
    MAP_HOVER_POSSIBLE_LOYALTY: "MAP_HOVER_POSSIBLE_LOYALTY",
    MAP_SETTINGS_HOVER: "MAP_SETTINGS_HOVER",
    MAP_SETTINGS_HOVER_COMMANDS: "MAP_SETTINGS_HOVER_COMMANDS",
    MAP_SETTINGS_HOVER_RECRUITS: "MAP_SETTINGS_HOVER_RECRUITS",
    MAP_SETTINGS_HOVER_BUILDINGS: "MAP_SETTINGS_HOVER_BUILDINGS",
    MAP_SETTINGS_HOVER_LOYALTY: "MAP_SETTINGS_HOVER_LOYALTY",
    MAP_SETTINGS_OVERLAY: "MAP_SETTINGS_OVERLAY",
    MAP_SETTINGS_OVERLAY_SHOW: "MAP_SETTINGS_OVERLAY_SHOW",
    TIME_MINUTE_PLURAL_SHORT: "TIME_MINUTE_PLURAL_SHORT",
    TIME_SECOND_PLURAL_SHORT: "TIME_SECOND_PLURAL_SHORT",
    BUILDING_STABLE: "BUILDING_STABLE",
    BUILDING_WORKSHOP: "BUILDING_WORKSHOP",
    BUILDING_ACADEMY: "BUILDING_ACADEMY",
    BUILDING_SMITHY: "BUILDING_SMITHY",
    BUILDING_RALLY_POINT: "BUILDING_RALLY_POINT",
    BUILDING_STATUE: "BUILDING_STATUE",
    BUILDING_HQ: "BUILDING_HQ",
    BUILDING_MARKET: "BUILDING_MARKET",
    BUILDING_TIMBER_CAMP: "BUILDING_TIMBER_CAMP",
    BUILDING_CLAY_PIT: "BUILDING_CLAY_PIT",
    BUILDING_IRON_MINE: "BUILDING_IRON_MINE",
    BUILDING_FARM: "BUILDING_FARM",
    BUILDING_WAREHOUSE: "BUILDING_WAREHOUSE",
    BUILDING_HIDING_PLACE: "BUILDING_HIDING_PLACE",
    BUILDING_WALL: "BUILDING_WALL",
    BUILDING_WATCHTOWER: "BUILDING_WATCHTOWER",
    BUILDING_CHURCH: "BUILDING_CHURCH",
    UNIT_M_ARCHER: "UNIT_M_ARCHER",
    UNIT_M_ARCHER_ALIASES: "UNIT_M_ARCHER_ALIASES",
    UNIT_HEAVY_CAV: "UNIT_HEAVY_CAV",
    UNIT_HEAVY_CAV_ALIASES: "UNIT_HEAVY_CAV_ALIASES",
    UNIT_PALADIN: "UNIT_PALADIN",
    REQUEST_STATS: "REQUEST_STATS",
    NONE: "NONE",
    UPLOADING_IF_CLOSED: "UPLOADING_IF_CLOSED",
    NO_COMMANDS_AVAILABLE: "NO_COMMANDS_AVAILABLE",
    NO_DATA_AVAILABLE: "NO_DATA_AVAILABLE",
    MAP_SETTINGS_OVERLAY_IGNORE_INTEL_1: "MAP_SETTINGS_OVERLAY_IGNORE_INTEL_1",
    MAP_SETTINGS_OVERLAY_IGNORE_INTEL_2: "MAP_SETTINGS_OVERLAY_IGNORE_INTEL_2",
    MAP_SETTINGS_OVERLAY_HIGHLIGHTS: "MAP_SETTINGS_OVERLAY_HIGHLIGHTS",
    MAP_SETTINGS_OVERLAY_HIGHLIGHTS_NONE: "MAP_SETTINGS_OVERLAY_HIGHLIGHTS_NONE",
    MAP_SETTINGS_OVERLAY_HIGHLIGHTS_HAS_GROUP: "MAP_SETTINGS_OVERLAY_HIGHLIGHTS_HAS_GROUP",
    MAP_SETTINGS_OVERLAY_HIGHLIGHTS_HAS_INTEL: "MAP_SETTINGS_OVERLAY_HIGHLIGHTS_HAS_INTEL",
    MAP_SETTINGS_OVERLAY_SHOW_NUKES: "MAP_SETTINGS_OVERLAY_SHOW_NUKES",
    MAP_SETTINGS_OVERLAY_SHOW_NOBLES: "MAP_SETTINGS_OVERLAY_SHOW_NOBLES",
    MAP_SETTINGS_OVERLAY_SHOW_STACKS: "MAP_SETTINGS_OVERLAY_SHOW_STACKS",
    MAP_SETTINGS_OVERLAY_RETURNING_1: "MAP_SETTINGS_OVERLAY_RETURNING_1",
    MAP_SETTINGS_OVERLAY_RETURNING_2: "MAP_SETTINGS_OVERLAY_RETURNING_2",
    MAP_SETTINGS_OVERLAY_WATCHTOWER: "MAP_SETTINGS_OVERLAY_WATCHTOWER",
    MAP_SETTINGS_OVERLAY_DV: "MAP_SETTINGS_OVERLAY_DV",
    MAP_SETTINGS_OVERLAY_STACK_1: "MAP_SETTINGS_OVERLAY_STACK_1",
    MAP_SETTINGS_OVERLAY_STACK_2: "MAP_SETTINGS_OVERLAY_STACK_2",
    MAP_SETTINGS_OVERLAY_TRIBE_1: "MAP_SETTINGS_OVERLAY_TRIBE_1",
    MAP_SETTINGS_OVERLAY_TRIBE_2: "MAP_SETTINGS_OVERLAY_TRIBE_2",
    TAB_SEND_RECAP: "TAB_SEND_RECAP",
    TAB_ACTIONS_ALERTS: "TAB_ACTIONS_ALERTS",
    ACTIONS_RECAPS_NONE: "ACTIONS_RECAPS_NONE",
    ACTIONS_RECAPS_AGE: "ACTIONS_RECAPS_AGE",
    ACTIONS_RECAPS_DESCRIPTION: "ACTIONS_RECAPS_DESCRIPTION",
    ACTIONS_RECAPS_ONLY_NEARBY: "ACTIONS_RECAPS_ONLY_NEARBY",
    VILLAGE: "VILLAGE",
    LOYALTY: "LOYALTY",
    ACTIONS_RECAPS_CAPTURED_AT: "ACTIONS_RECAPS_CAPTURED_AT",
    ACTIONS_RECAPS_OLD_OWNER: "ACTIONS_RECAPS_OLD_OWNER",
    ACTIONS_RECAPS_NEW_OWNER: "ACTIONS_RECAPS_NEW_OWNER",
    TAB_SNIPES_NEEDED: "TAB_SNIPES_NEEDED",
    UNIT_PALADIN_ALIASES: "UNIT_PALADIN_ALIASES",
    MAP_SETTINGS_OVERLAY_SHOW_WALL: "MAP_SETTINGS_OVERLAY_SHOW_WALL",
    BACKTIME_HOURS: "BACKTIME_HOURS",
    NOBLES: 'NOBLES',
    NAME: 'NAME',
    OPTIONS: 'OPTIONS',
    INCOMINGS_NONE: 'INCOMINGS_NONE',
    INCOMINGS_UPLOAD_ERROR: 'INCOMINGS_UPLOAD_ERROR',
    UNIT_NOBLE_ALIASES: 'UNIT_NOBLE_ALIASES',
    UNIT_NOBLE: 'UNIT_NOBLE',
    YOUR_SUPPORT_FROM: 'YOUR_SUPPORT_FROM',
    TAGGING_TITLE: 'TAGGING_TITLE',
    TAG_CODE_DISTANCE_DETAILS: 'TAG_CODE_DISTANCE_DETAILS',
    PREVIEW: 'PREVIEW',
    COMMANDS_FROM_HERE: 'COMMANDS_FROM_HERE',
    MAP_SETTINGS_HOVER_NUKES: 'MAP_SETTINGS_HOVER_NUKES',
    TAB_ALERTS: 'TAB_ALERTS',
    BB_UNIT: 'BB_UNIT',
    BB_URL: 'BB_URL',
    TAB_HELP: "TAB_HELP",
    TAB_TRANSLATIONS: "TAB_TRANSLATIONS",
    TRANSLATION_LANGUAGE: "TRANSLATION_LANGUAGE",
    TRANSLATION_TRANSLATION: "TRANSLATION_TRANSLATION",
    TRANSLATION_SAVE_SETTINGS: "TRANSLATION_SAVE_SETTINGS",
    TRANSLATION_EDIT: "TRANSLATION_EDIT",
    TRANSLATION_NEW: "TRANSLATION_NEW",
    TRANSLATION_SAVE_CHANGES: "TRANSLATION_SAVE_CHANGES",
    TRANSLATION_AUTHOR: "TRANSLATION_AUTHOR",
    TRANSLATION_EDIT_KEY: "TRANSLATION_EDIT_KEY",
    TRANSLATION_EDIT_VALUE: "TRANSLATION_EDIT_VALUE",
    TRANSLATION_EDIT_SAMPLE: "TRANSLATION_EDIT_SAMPLE",
    TRANSLATION_EDIT_MISSING_PARAMS: "TRANSLATION_EDIT_MISSING_PARAMS",
    TRANSLATION_EDIT_NEEDS_EXACT: "TRANSLATION_EDIT_NEEDS_EXACT",
    TRANSLATION_SAVE_CHANGES_SUCCESS: "TRANSLATION_SAVE_CHANGES_SUCCESS",
    TRANSLATION_DELETE: "TRANSLATION_DELETE",
    TRANSLATION_DELETE_CONFIRM: "TRANSLATION_DELETE_CONFIRM",
    TRANSLATION_DELETE_DEFAULT: "TRANSLATION_DELETE_DEFAULT",
    TRANSLATION_NOT_SAVED: "TRANSLATION_NOT_SAVED",
    TRANSLATION_DELETED: "TRANSLATION_DELETED",
    TRANSLATION_DUPLICATE: "TRANSLATION_DUPLICATE",
    TRANSLATION_MAKING_COPY: "TRANSLATION_MAKING_COPY",
    MAP_HOVER_NO_ARMY: "MAP_HOVER_NO_ARMY",
    MAP_HOVER_NO_BUILDINGS: "MAP_HOVER_NO_BUILDINGS",
    TARGET_VILLAGE: "TARGET_VILLAGE"
};