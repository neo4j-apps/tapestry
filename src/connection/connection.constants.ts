export const BOLT_MAGIC_PREAMBLE = 0x6060b017;

export enum BOLT_PROTOCOLS {
    UNKNOWN = 0,
    V1 = 1,
    V2 = 2,
    V3 = 3,
    V4 = 4,
}

export enum V1_BOLT_MESSAGES {
    HELLO = 0x01,
    ACK_FAILURE = 0x0E,
    RESET = 0x0F,
    RUN = 0x10,
    DISCARD_ALL = 0x2F,
    PULL = 0x3F,
}

export const V2_BOLT_MESSAGES = V1_BOLT_MESSAGES;

export enum V3_BOLT_MESSAGES {
    HELLO = V2_BOLT_MESSAGES.HELLO,
    GOODBYE = 0x02,
    RESET = V2_BOLT_MESSAGES.RESET,
    RUN = V2_BOLT_MESSAGES.RUN,
    BEGIN = 0x11,
    COMMIT = 0x12,
    ROLLBACK = 0x13,
    DISCARD_ALL = V2_BOLT_MESSAGES.DISCARD_ALL,
    PULL = V2_BOLT_MESSAGES.PULL,
}

export enum V4_BOLT_MESSAGES {
    HELLO = V3_BOLT_MESSAGES.HELLO,
    GOODBYE = V3_BOLT_MESSAGES.GOODBYE,
    RESET = V3_BOLT_MESSAGES.RESET,
    RUN = V3_BOLT_MESSAGES.RUN,
    BEGIN = V3_BOLT_MESSAGES.BEGIN,
    COMMIT = V3_BOLT_MESSAGES.COMMIT,
    ROLLBACK = V3_BOLT_MESSAGES.ROLLBACK,
    DISCARD = V3_BOLT_MESSAGES.DISCARD_ALL,
    PULL = V3_BOLT_MESSAGES.PULL,
}