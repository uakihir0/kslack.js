type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare namespace kotlin.collections {
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    namespace KtMap {
        function fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
    }
}
export declare namespace work.socialhub.kslack.stream {
    interface SlackStream {
        token(): string;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.stream.SlackStream": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.stream {
    abstract class SlackStreamFactory extends KtSingleton<SlackStreamFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace SlackStreamFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(token?: string): work.socialhub.kslack.stream.SlackStream;
                private constructor();
            }
        }
    }
}
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace work.socialhub.kslack {
    interface Slack {
        admin(): work.socialhub.kslack.api.AdminResource;
        api(): work.socialhub.kslack.api.ApiResource;
        apps(): work.socialhub.kslack.api.AppsResource;
        auth(): work.socialhub.kslack.api.AuthResource;
        bookmarks(): work.socialhub.kslack.api.BookmarksResource;
        bots(): work.socialhub.kslack.api.BotsResource;
        calls(): work.socialhub.kslack.api.CallsResource;
        chat(): work.socialhub.kslack.api.ChatResource;
        conversations(): work.socialhub.kslack.api.ConversationsResource;
        /** @deprecated Use ViewsResource (views.open) for modals instead. */
        dialog(): work.socialhub.kslack.api.DialogResource;
        dnd(): work.socialhub.kslack.api.DndResource;
        emoji(): work.socialhub.kslack.api.EmojiResource;
        files(): work.socialhub.kslack.api.FilesResource;
        migration(): work.socialhub.kslack.api.MigrationResource;
        oauth(): work.socialhub.kslack.api.OAuthResource;
        openIDConnect(): work.socialhub.kslack.api.OpenIDConnectResource;
        pins(): work.socialhub.kslack.api.PinsResource;
        reactions(): work.socialhub.kslack.api.ReactionsResource;
        reminders(): work.socialhub.kslack.api.RemindersResource;
        search(): work.socialhub.kslack.api.SearchResource;
        /** @deprecated Stars API is functionally deprecated. Replaced by Later view. */
        stars(): work.socialhub.kslack.api.StarsResource;
        status(): work.socialhub.kslack.api.StatusResource;
        team(): work.socialhub.kslack.api.TeamResource;
        usergroups(): work.socialhub.kslack.api.UsergroupsResource;
        users(): work.socialhub.kslack.api.UsersResource;
        views(): work.socialhub.kslack.api.ViewsResource;
        readonly token: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.Slack": unique symbol;
        };
    }
    namespace Slack {
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get ENDPOINT_URL_PREFIX(): string;
                    get STATUS_URL_PREFIX(): string;
                    get AUTHORIZE_URL(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack {
    abstract class SlackFactory extends KtSingleton<SlackFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace SlackFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                createInstance(): work.socialhub.kslack.Slack;
                createInstanceWithToken(token: string): work.socialhub.kslack.Slack;
                private constructor();
            }
        }
    }
}
export declare namespace work.socialhub.kslack.api {
    interface AdminResource {
        adminAppsApprove(req: work.socialhub.kslack.api.methods.request.admin.apps.AdminAppsApproveRequest): Promise<work.socialhub.kslack.api.methods.response.admin.apps.AdminAppsApproveResponse>;
        adminAppsRestrict(req: work.socialhub.kslack.api.methods.request.admin.apps.AdminAppsRestrictRequest): Promise<work.socialhub.kslack.api.methods.response.admin.apps.AdminAppsRestrictResponse>;
        adminAppsRequestsList(req: work.socialhub.kslack.api.methods.request.admin.apps.AdminAppsRequestsListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.apps.AdminAppsRequestsListResponse>;
        adminInviteRequestsApprove(req: work.socialhub.kslack.api.methods.request.admin.invite_requests.AdminInviteRequestsApproveRequest): Promise<work.socialhub.kslack.api.methods.response.admin.invite_requests.AdminInviteRequestsApproveResponse>;
        adminInviteRequestsDeny(req: work.socialhub.kslack.api.methods.request.admin.invite_requests.AdminInviteRequestsDenyRequest): Promise<work.socialhub.kslack.api.methods.response.admin.invite_requests.AdminInviteRequestsDenyResponse>;
        adminInviteRequestsList(req: work.socialhub.kslack.api.methods.request.admin.invite_requests.AdminInviteRequestsListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.invite_requests.AdminInviteRequestsListResponse>;
        adminInviteRequestsApprovedList(req: work.socialhub.kslack.api.methods.request.admin.invite_requests.AdminInviteRequestsApprovedListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.invite_requests.AdminInviteRequestsApprovedListResponse>;
        adminInviteRequestsDeniedList(req: work.socialhub.kslack.api.methods.request.admin.invite_requests.AdminInviteRequestsDeniedListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.invite_requests.AdminInviteRequestsDeniedListResponse>;
        adminTeamsAdminsList(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsAdminsListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsAdminsListResponse>;
        adminTeamsCreate(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsCreateRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsCreateResponse>;
        adminTeamsOwnersList(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsOwnersListRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsOwnersListResponse>;
        adminTeamsSettingsSetDescription(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsSettingsSetDescriptionRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsSettingsSetDescriptionResponse>;
        adminTeamsSettingsSetIcon(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsSettingsSetIconRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsSettingsSetIconResponse>;
        adminTeamsSettingsSetName(req: work.socialhub.kslack.api.methods.request.admin.teams.AdminTeamsSettingsSetNameRequest): Promise<work.socialhub.kslack.api.methods.response.admin.teams.AdminTeamsSettingsSetNameResponse>;
        adminUsersAssign(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersAssignRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersAssignResponse>;
        adminUsersInvite(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersInviteRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersInviteResponse>;
        adminUsersRemove(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersRemoveResponse>;
        adminUsersSetAdmin(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersSetAdminRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersSetAdminResponse>;
        adminUsersSetOwner(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersSetOwnerRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersSetOwnerResponse>;
        adminUsersSetRegular(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersSetRegularRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersSetRegularResponse>;
        adminUsersSessionReset(req: work.socialhub.kslack.api.methods.request.admin.users.AdminUsersSessionResetRequest): Promise<work.socialhub.kslack.api.methods.response.admin.users.AdminUsersSessionResetResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.AdminResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface ApiResource {
        apiTest(req: work.socialhub.kslack.api.methods.request.api.ApiTestRequest): Promise<work.socialhub.kslack.api.methods.response.api.ApiTestResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.ApiResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface AppsResource {
        appsConnectionsOpen(req: work.socialhub.kslack.api.methods.request.apps.connections.AppsConnectionsOpenRequest): Promise<work.socialhub.kslack.api.methods.response.apps.connections.AppsConnectionsOpenResponse>;
        appsUninstall(req: work.socialhub.kslack.api.methods.request.apps.AppsUninstallRequest): Promise<work.socialhub.kslack.api.methods.response.apps.AppsUninstallResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.AppsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface AuthResource {
        authRevoke(req: work.socialhub.kslack.api.methods.request.auth.AuthRevokeRequest): Promise<work.socialhub.kslack.api.methods.response.auth.AuthRevokeResponse>;
        authTest(req: work.socialhub.kslack.api.methods.request.auth.AuthTestRequest): Promise<work.socialhub.kslack.api.methods.response.auth.AuthTestResponse>;
        authTeamsList(req: work.socialhub.kslack.api.methods.request.auth.AuthTeamsListRequest): Promise<work.socialhub.kslack.api.methods.response.auth.AuthTeamsListResponse>;
        authorizationURL(clientId: string, redirectUri: string, scope?: Nullable<string>, userScope?: Nullable<string>): string;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.AuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface BookmarksResource {
        bookmarksAdd(req: work.socialhub.kslack.api.methods.request.bookmarks.BookmarksAddRequest): Promise<work.socialhub.kslack.api.methods.response.bookmarks.BookmarksAddResponse>;
        bookmarksEdit(req: work.socialhub.kslack.api.methods.request.bookmarks.BookmarksEditRequest): Promise<work.socialhub.kslack.api.methods.response.bookmarks.BookmarksEditResponse>;
        bookmarksList(req: work.socialhub.kslack.api.methods.request.bookmarks.BookmarksListRequest): Promise<work.socialhub.kslack.api.methods.response.bookmarks.BookmarksListResponse>;
        bookmarksRemove(req: work.socialhub.kslack.api.methods.request.bookmarks.BookmarksRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.bookmarks.BookmarksRemoveResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.BookmarksResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface BotsResource {
        botsInfo(req: work.socialhub.kslack.api.methods.request.bots.BotsInfoRequest): Promise<work.socialhub.kslack.api.methods.response.bots.BotsInfoResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.BotsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface CallsResource {
        callsAdd(req: work.socialhub.kslack.api.methods.request.calls.CallsAddRequest): Promise<work.socialhub.kslack.api.methods.response.calls.CallsAddResponse>;
        callsEnd(req: work.socialhub.kslack.api.methods.request.calls.CallsEndRequest): Promise<work.socialhub.kslack.api.methods.response.calls.CallsEndResponse>;
        callsInfo(req: work.socialhub.kslack.api.methods.request.calls.CallsInfoRequest): Promise<work.socialhub.kslack.api.methods.response.calls.CallsInfoResponse>;
        callsUpdate(req: work.socialhub.kslack.api.methods.request.calls.CallsUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.calls.CallsUpdateResponse>;
        callsParticipantsAdd(req: work.socialhub.kslack.api.methods.request.calls.participants.CallsParticipantsAddRequest): Promise<work.socialhub.kslack.api.methods.response.calls.participants.CallsParticipantsAddResponse>;
        callsParticipantsRemove(req: work.socialhub.kslack.api.methods.request.calls.participants.CallsParticipantsRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.calls.participants.CallsParticipantsRemoveResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.CallsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface ChatResource {
        chatGetPermalink(req: work.socialhub.kslack.api.methods.request.chat.ChatGetPermalinkRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatGetPermalinkResponse>;
        chatDelete(req: work.socialhub.kslack.api.methods.request.chat.ChatDeleteRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatDeleteResponse>;
        chatDeleteScheduledMessage(req: work.socialhub.kslack.api.methods.request.chat.ChatDeleteScheduledMessageRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatDeleteScheduledMessageResponse>;
        chatMeMessage(req: work.socialhub.kslack.api.methods.request.chat.ChatMeMessageRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatMeMessageResponse>;
        chatPostEphemeral(req: work.socialhub.kslack.api.methods.request.chat.ChatPostEphemeralRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatPostEphemeralResponse>;
        chatPostMessage(req: work.socialhub.kslack.api.methods.request.chat.ChatPostMessageRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatPostMessageResponse>;
        chatScheduleMessage(req: work.socialhub.kslack.api.methods.request.chat.ChatScheduleMessageRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatScheduleMessageResponse>;
        chatUpdate(req: work.socialhub.kslack.api.methods.request.chat.ChatUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatUpdateResponse>;
        chatUnfurl(req: work.socialhub.kslack.api.methods.request.chat.ChatUnfurlRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatUnfurlResponse>;
        chatScheduleMessagesListMessage(req: work.socialhub.kslack.api.methods.request.chat.scheduled_messages.ChatScheduleMessagesListRequest): Promise<work.socialhub.kslack.api.methods.response.chat.scheduled_messages.ChatScheduleMessagesListResponse>;
        chatStartStream(req: work.socialhub.kslack.api.methods.request.chat.ChatStartStreamRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatStartStreamResponse>;
        chatAppendStream(req: work.socialhub.kslack.api.methods.request.chat.ChatAppendStreamRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatAppendStreamResponse>;
        chatStopStream(req: work.socialhub.kslack.api.methods.request.chat.ChatStopStreamRequest): Promise<work.socialhub.kslack.api.methods.response.chat.ChatStopStreamResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.ChatResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface ConversationsResource {
        conversationsArchive(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsArchiveRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsArchiveResponse>;
        conversationsClose(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsCloseRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsCloseResponse>;
        conversationsCreate(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsCreateRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsCreateResponse>;
        conversationsHistory(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsHistoryRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsHistoryResponse>;
        conversationsInfo(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsInfoRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsInfoResponse>;
        conversationsInvite(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsInviteRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsInviteResponse>;
        conversationsJoin(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsJoinRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsJoinResponse>;
        conversationsKick(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsKickRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsKickResponse>;
        conversationsLeave(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsLeaveRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsLeaveResponse>;
        conversationsList(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsListRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsListResponse>;
        conversationsMembers(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsMembersRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsMembersResponse>;
        conversationsOpen(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsOpenRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsOpenResponse>;
        conversationsRename(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsRenameRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsRenameResponse>;
        conversationsReplies(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsRepliesRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsRepliesResponse>;
        conversationsSetPurpose(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsSetPurposeRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsSetPurposeResponse>;
        conversationsSetTopic(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsSetTopicRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsSetTopicResponse>;
        conversationsMark(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsMarkRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsMarkResponse>;
        conversationsUnarchive(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsUnarchiveRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsUnarchiveResponse>;
        conversationsAcceptSharedInvite(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsAcceptSharedInviteRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsAcceptSharedInviteResponse>;
        conversationsApproveSharedInvite(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsApproveSharedInviteRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsApproveSharedInviteResponse>;
        conversationsCanvasesCreate(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsCanvasesCreateRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsCanvasesCreateResponse>;
        conversationsDeclineSharedInvite(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsDeclineSharedInviteRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsDeclineSharedInviteResponse>;
        conversationsInviteShared(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsInviteSharedRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsInviteSharedResponse>;
        conversationsListConnectInvites(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsListConnectInvitesRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsListConnectInvitesResponse>;
        conversationsRequestSharedInviteApprove(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsRequestSharedInviteApproveRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsRequestSharedInviteApproveResponse>;
        conversationsRequestSharedInviteDeny(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsRequestSharedInviteDenyRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsRequestSharedInviteDenyResponse>;
        conversationsRequestSharedInviteList(req: work.socialhub.kslack.api.methods.request.conversations.ConversationsRequestSharedInviteListRequest): Promise<work.socialhub.kslack.api.methods.response.conversations.ConversationsRequestSharedInviteListResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.ConversationsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    /** @deprecated Use ViewsResource (views.open) for modals instead. */
    interface DialogResource {
        dialogOpen(req: work.socialhub.kslack.api.methods.request.dialog.DialogOpenRequest): Promise<work.socialhub.kslack.api.methods.response.dialog.DialogOpenResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.DialogResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface DndResource {
        dndEndDnd(req: work.socialhub.kslack.api.methods.request.dnd.DndEndDndRequest): Promise<work.socialhub.kslack.api.methods.response.dnd.DndEndDndResponse>;
        dndEndSnooze(req: work.socialhub.kslack.api.methods.request.dnd.DndEndSnoozeRequest): Promise<work.socialhub.kslack.api.methods.response.dnd.DndEndSnoozeResponse>;
        dndInfo(req: work.socialhub.kslack.api.methods.request.dnd.DndInfoRequest): Promise<work.socialhub.kslack.api.methods.response.dnd.DndInfoResponse>;
        dndSetSnooze(req: work.socialhub.kslack.api.methods.request.dnd.DndSetSnoozeRequest): Promise<work.socialhub.kslack.api.methods.response.dnd.DndSetSnoozeResponse>;
        dndTeamInfo(req: work.socialhub.kslack.api.methods.request.dnd.DndTeamInfoRequest): Promise<work.socialhub.kslack.api.methods.response.dnd.DndTeamInfoResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.DndResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface EmojiResource {
        emojiList(req: work.socialhub.kslack.api.methods.request.emoji.EmojiListRequest): Promise<work.socialhub.kslack.api.methods.response.emoji.EmojiListResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.EmojiResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface FilesResource {
        filesDelete(req: work.socialhub.kslack.api.methods.request.files.FilesDeleteRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesDeleteResponse>;
        filesInfo(req: work.socialhub.kslack.api.methods.request.files.FilesInfoRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesInfoResponse>;
        filesList(req: work.socialhub.kslack.api.methods.request.files.FilesListRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesListResponse>;
        filesRevokePublicURL(req: work.socialhub.kslack.api.methods.request.files.FilesRevokePublicURLRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesRevokePublicURLResponse>;
        filesSharedPublicURL(req: work.socialhub.kslack.api.methods.request.files.FilesSharedPublicURLRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesSharedPublicURLResponse>;
        filesGetUploadURLExternal(req: work.socialhub.kslack.api.methods.request.files.FilesGetUploadURLExternalRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesGetUploadURLExternalResponse>;
        filesCompleteUploadExternal(req: work.socialhub.kslack.api.methods.request.files.FilesCompleteUploadExternalRequest): Promise<work.socialhub.kslack.api.methods.response.files.FilesCompleteUploadExternalResponse>;
        filesRemoteAdd(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteAddRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteAddResponse>;
        filesRemoteInfo(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteInfoRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteInfoResponse>;
        filesRemoteList(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteListRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteListResponse>;
        filesRemoteRemove(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteRemoveResponse>;
        filesRemoteShare(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteShareRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteShareResponse>;
        filesRemoteUpdate(req: work.socialhub.kslack.api.methods.request.files.remote.FilesRemoteUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.files.remote.FilesRemoteUpdateResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.FilesResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface MigrationResource {
        migrationExchange(req: work.socialhub.kslack.api.methods.request.migration.MigrationExchangeRequest): Promise<work.socialhub.kslack.api.methods.response.migration.MigrationExchangeResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.MigrationResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface OAuthResource {
        oauthAccess(req: work.socialhub.kslack.api.methods.request.oauth.OAuthAccessRequest): Promise<work.socialhub.kslack.api.methods.response.oauth.OAuthAccessResponse>;
        oauthV2Access(req: work.socialhub.kslack.api.methods.request.oauth.OAuthV2AccessRequest): Promise<work.socialhub.kslack.api.methods.response.oauth.OAuthV2AccessResponse>;
        oauthToken(req: work.socialhub.kslack.api.methods.request.oauth.OAuthTokenRequest): Promise<work.socialhub.kslack.api.methods.response.oauth.OAuthTokenResponse>;
        oauthV2Exchange(req: work.socialhub.kslack.api.methods.request.oauth.OAuthV2ExchangeRequest): Promise<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.OAuthResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface OpenIDConnectResource {
        openIDConnectToken(req: work.socialhub.kslack.api.methods.request.openid.connect.OpenIDConnectTokenRequest): Promise<work.socialhub.kslack.api.methods.response.openid.connect.OpenIDConnectTokenResponse>;
        openIDConnectUserInfo(req: work.socialhub.kslack.api.methods.request.openid.connect.OpenIDConnectUserInfoRequest): Promise<work.socialhub.kslack.api.methods.response.openid.connect.OpenIDConnectUserInfoResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.OpenIDConnectResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface PinsResource {
        pinsAdd(req: work.socialhub.kslack.api.methods.request.pins.PinsAddRequest): Promise<work.socialhub.kslack.api.methods.response.pins.PinsAddResponse>;
        pinsList(req: work.socialhub.kslack.api.methods.request.pins.PinsListRequest): Promise<work.socialhub.kslack.api.methods.response.pins.PinsListResponse>;
        pinsRemove(req: work.socialhub.kslack.api.methods.request.pins.PinsRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.pins.PinsRemoveResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.PinsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface ReactionsResource {
        reactionsAdd(req: work.socialhub.kslack.api.methods.request.reactions.ReactionsAddRequest): Promise<work.socialhub.kslack.api.methods.response.reactions.ReactionsAddResponse>;
        reactionsGet(req: work.socialhub.kslack.api.methods.request.reactions.ReactionsGetRequest): Promise<work.socialhub.kslack.api.methods.response.reactions.ReactionsGetResponse>;
        reactionsList(req: work.socialhub.kslack.api.methods.request.reactions.ReactionsListRequest): Promise<work.socialhub.kslack.api.methods.response.reactions.ReactionsListResponse>;
        reactionsRemove(req: work.socialhub.kslack.api.methods.request.reactions.ReactionsRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.reactions.ReactionsRemoveResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.ReactionsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface RemindersResource {
        remindersAdd(req: work.socialhub.kslack.api.methods.request.reminders.RemindersAddRequest): Promise<work.socialhub.kslack.api.methods.response.reminders.RemindersAddResponse>;
        remindersComplete(req: work.socialhub.kslack.api.methods.request.reminders.RemindersCompleteRequest): Promise<work.socialhub.kslack.api.methods.response.reminders.RemindersCompleteResponse>;
        remindersDelete(req: work.socialhub.kslack.api.methods.request.reminders.RemindersDeleteRequest): Promise<work.socialhub.kslack.api.methods.response.reminders.RemindersDeleteResponse>;
        remindersInfo(req: work.socialhub.kslack.api.methods.request.reminders.RemindersInfoRequest): Promise<work.socialhub.kslack.api.methods.response.reminders.RemindersInfoResponse>;
        remindersList(req: work.socialhub.kslack.api.methods.request.reminders.RemindersListRequest): Promise<work.socialhub.kslack.api.methods.response.reminders.RemindersListResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.RemindersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface SearchResource {
        searchAll(req: work.socialhub.kslack.api.methods.request.search.SearchAllRequest): Promise<work.socialhub.kslack.api.methods.response.search.SearchAllResponse>;
        searchMessages(req: work.socialhub.kslack.api.methods.request.search.SearchMessagesRequest): Promise<work.socialhub.kslack.api.methods.response.search.SearchMessagesResponse>;
        searchFiles(req: work.socialhub.kslack.api.methods.request.search.SearchFilesRequest): Promise<work.socialhub.kslack.api.methods.response.search.SearchFilesResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.SearchResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    /** @deprecated Stars API is functionally deprecated. Replaced by Later view. */
    interface StarsResource {
        starsAdd(req: work.socialhub.kslack.api.methods.request.stars.StarsAddRequest): Promise<work.socialhub.kslack.api.methods.response.stars.StarsAddResponse>;
        starsList(req: work.socialhub.kslack.api.methods.request.stars.StarsListRequest): Promise<work.socialhub.kslack.api.methods.response.stars.StarsListResponse>;
        starsRemove(req: work.socialhub.kslack.api.methods.request.stars.StarsRemoveRequest): Promise<work.socialhub.kslack.api.methods.response.stars.StarsRemoveResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.StarsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface StatusResource {
        current(): Promise<work.socialhub.kslack.api.status.model.CurrentStatus>;
        history(): Promise<Array<work.socialhub.kslack.api.status.model.SlackIssue>>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.StatusResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface TeamResource {
        teamAccessLogs(req: work.socialhub.kslack.api.methods.request.team.TeamAccessLogsRequest): Promise<work.socialhub.kslack.api.methods.response.team.TeamAccessLogsResponse>;
        teamBillableInfo(req: work.socialhub.kslack.api.methods.request.team.TeamBillableInfoRequest): Promise<work.socialhub.kslack.api.methods.response.team.TeamBillableInfoResponse>;
        teamInfo(req: work.socialhub.kslack.api.methods.request.team.TeamInfoRequest): Promise<work.socialhub.kslack.api.methods.response.team.TeamInfoResponse>;
        teamIntegrationLogs(req: work.socialhub.kslack.api.methods.request.team.TeamIntegrationLogsRequest): Promise<work.socialhub.kslack.api.methods.response.team.TeamIntegrationLogsResponse>;
        teamProfileGet(req: work.socialhub.kslack.api.methods.request.team.profile.TeamProfileGetRequest): Promise<work.socialhub.kslack.api.methods.response.team.profile.TeamProfileGetResponse>;
        teamBillingInfo(req: work.socialhub.kslack.api.methods.request.team.billing.TeamBillingInfoRequest): Promise<work.socialhub.kslack.api.methods.response.team.billing.TeamBillingInfoResponse>;
        teamExternalTeamsDisconnect(req: work.socialhub.kslack.api.methods.request.team.external_teams.TeamExternalTeamsDisconnectRequest): Promise<work.socialhub.kslack.api.methods.response.team.external_teams.TeamExternalTeamsDisconnectResponse>;
        teamExternalTeamsList(req: work.socialhub.kslack.api.methods.request.team.external_teams.TeamExternalTeamsListRequest): Promise<work.socialhub.kslack.api.methods.response.team.external_teams.TeamExternalTeamsListResponse>;
        teamPreferencesList(req: work.socialhub.kslack.api.methods.request.team.preferences.TeamPreferencesListRequest): Promise<work.socialhub.kslack.api.methods.response.team.preferences.TeamPreferencesListResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.TeamResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface UsergroupsResource {
        usergroupsCreate(req: work.socialhub.kslack.api.methods.request.usergroups.UsergroupsCreateRequest): Promise<work.socialhub.kslack.api.methods.SlackApiResponse/* work.socialhub.kslack.api.methods.response.usergroups.UserGroupsCreateResponse */>;
        usergroupsDisable(req: work.socialhub.kslack.api.methods.request.usergroups.UsergroupsDisableRequest): Promise<work.socialhub.kslack.api.methods.SlackApiResponse/* work.socialhub.kslack.api.methods.response.usergroups.UserGroupsDisableResponse */>;
        usergroupsEnable(req: work.socialhub.kslack.api.methods.request.usergroups.UsergroupsEnableRequest): Promise<work.socialhub.kslack.api.methods.response.usergroups.UsergroupsEnableResponse>;
        usergroupsList(req: work.socialhub.kslack.api.methods.request.usergroups.UsergroupsListRequest): Promise<work.socialhub.kslack.api.methods.response.usergroups.UsergroupsListResponse>;
        usergroupsUpdate(req: work.socialhub.kslack.api.methods.request.usergroups.UsergroupsUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.usergroups.UsergroupsUpdateResponse>;
        usergroupUsersList(req: work.socialhub.kslack.api.methods.request.usergroups.users.UsergroupUsersListRequest): Promise<work.socialhub.kslack.api.methods.response.usergroups.users.UsergroupUsersListResponse>;
        usergroupUsersUpdate(req: work.socialhub.kslack.api.methods.request.usergroups.users.UsergroupUsersUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.usergroups.users.UserGroupUsersUpdateResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.UsergroupsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface UsersResource {
        usersConversations(req: work.socialhub.kslack.api.methods.request.users.UsersConversationsRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersConversationsResponse>;
        usersDeletePhoto(req: work.socialhub.kslack.api.methods.request.users.UsersDeletePhotoRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersDeletePhotoResponse>;
        usersGetPresence(req: work.socialhub.kslack.api.methods.request.users.UsersGetPresenceRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersGetPresenceResponse>;
        usersIdentity(req: work.socialhub.kslack.api.methods.request.users.UsersIdentityRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersIdentityResponse>;
        usersInfo(req: work.socialhub.kslack.api.methods.request.users.UsersInfoRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersInfoResponse>;
        usersList(req: work.socialhub.kslack.api.methods.request.users.UsersListRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersListResponse>;
        usersLookupByEmail(req: work.socialhub.kslack.api.methods.request.users.UsersLookupByEmailRequest): Promise<work.socialhub.kslack.api.methods.SlackApiResponse/* work.socialhub.kslack.api.methods.response.users.UsersLookupByEmailResponse */>;
        usersSetActive(req: work.socialhub.kslack.api.methods.request.users.UsersSetActiveRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersSetActiveResponse>;
        usersSetPhoto(req: work.socialhub.kslack.api.methods.request.users.UsersSetPhotoRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersSetPhotoResponse>;
        usersSetPresence(req: work.socialhub.kslack.api.methods.request.users.UsersSetPresenceRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersSetPresenceResponse>;
        usersProfileGet(req: work.socialhub.kslack.api.methods.request.users.profile.UsersProfileGetRequest): Promise<work.socialhub.kslack.api.methods.response.users.profile.UsersProfileGetResponse>;
        usersProfileSet(req: work.socialhub.kslack.api.methods.request.users.profile.UsersProfileSetRequest): Promise<work.socialhub.kslack.api.methods.response.users.profile.UsersProfileSetResponse>;
        usersDiscoverableContactsLookup(req: work.socialhub.kslack.api.methods.request.users.UsersDiscoverableContactsLookupRequest): Promise<work.socialhub.kslack.api.methods.response.users.UsersDiscoverableContactsLookupResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.UsersResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api {
    interface ViewsResource {
        viewsOpen(req: work.socialhub.kslack.api.methods.request.views.ViewsOpenRequest): Promise<work.socialhub.kslack.api.methods.response.views.ViewsOpenResponse>;
        viewsPush(req: work.socialhub.kslack.api.methods.request.views.ViewsPushRequest): Promise<work.socialhub.kslack.api.methods.response.views.ViewsPushResponse>;
        viewsUpdate(req: work.socialhub.kslack.api.methods.request.views.ViewsUpdateRequest): Promise<work.socialhub.kslack.api.methods.response.views.ViewsUpdateResponse>;
        viewsPublish(req: work.socialhub.kslack.api.methods.request.views.ViewsPublishRequest): Promise<work.socialhub.kslack.api.methods.response.views.ViewsPublishResponse>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.api.ViewsResource": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.api.methods {
    class SlackApiResponse {
        constructor();
        get isOk(): boolean;
        set isOk(value: boolean);
        get warning(): Nullable<string>;
        set warning(value: Nullable<string>);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
        get needed(): Nullable<string>;
        set needed(value: Nullable<string>);
        get provided(): Nullable<string>;
        set provided(value: Nullable<string>);
    }
    namespace SlackApiResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SlackApiResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.apps {
    class AdminAppsApproveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, appId: Nullable<string>, requestId: Nullable<string>, teamId: string);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get requestId(): Nullable<string>;
        set requestId(value: Nullable<string>);
        get teamId(): string;
        set teamId(value: string);
    }
    namespace AdminAppsApproveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsApproveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.apps {
    class AdminAppsRequestsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminAppsRequestsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsRequestsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.apps {
    class AdminAppsRestrictRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, appId: Nullable<string>, requestId: Nullable<string>, teamId: Nullable<string>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get requestId(): Nullable<string>;
        set requestId(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminAppsRestrictRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsRestrictRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.invite_requests {
    class AdminInviteRequestsApproveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteRequestId: Nullable<string>, teamId: Nullable<string>);
        get inviteRequestId(): Nullable<string>;
        set inviteRequestId(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminInviteRequestsApproveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsApproveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.invite_requests {
    class AdminInviteRequestsApprovedListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminInviteRequestsApprovedListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsApprovedListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.invite_requests {
    class AdminInviteRequestsDeniedListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminInviteRequestsDeniedListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsDeniedListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.invite_requests {
    class AdminInviteRequestsDenyRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteRequestId: Nullable<string>, teamId: Nullable<string>);
        get inviteRequestId(): Nullable<string>;
        set inviteRequestId(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminInviteRequestsDenyRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsDenyRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.invite_requests {
    class AdminInviteRequestsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminInviteRequestsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsAdminsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminTeamsAdminsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsAdminsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsCreateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamDomain: Nullable<string>, teamName: Nullable<string>, teamDescription: Nullable<string>, teamDiscoverability: Nullable<string>);
        get teamDomain(): Nullable<string>;
        set teamDomain(value: Nullable<string>);
        get teamName(): Nullable<string>;
        set teamName(value: Nullable<string>);
        get teamDescription(): Nullable<string>;
        set teamDescription(value: Nullable<string>);
        get teamDiscoverability(): Nullable<string>;
        set teamDiscoverability(value: Nullable<string>);
    }
    namespace AdminTeamsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsOwnersListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, teamId: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace AdminTeamsOwnersListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsOwnersListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsSettingsSetDescriptionRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, description: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
    }
    namespace AdminTeamsSettingsSetDescriptionRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetDescriptionRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsSettingsSetIconRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, imageUrl: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get imageUrl(): Nullable<string>;
        set imageUrl(value: Nullable<string>);
    }
    namespace AdminTeamsSettingsSetIconRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetIconRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.teams {
    class AdminTeamsSettingsSetNameRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, name: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace AdminTeamsSettingsSetNameRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetNameRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersAssignRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, userId: Nullable<string>, isRestricted: boolean, isUltraRestricted: boolean);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get isRestricted(): boolean;
        set isRestricted(value: boolean);
        get isUltraRestricted(): boolean;
        set isUltraRestricted(value: boolean);
    }
    namespace AdminUsersAssignRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersAssignRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersInviteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channelIds: Nullable<Array<string>>, email: Nullable<string>, teamId: Nullable<string>, customMessage: Nullable<string>, guestExpirationTs: Nullable<string>, isRestricted: boolean, isUltraRestricted: boolean, realName: Nullable<string>, isResend: boolean);
        get channelIds(): Nullable<Array<string>>;
        set channelIds(value: Nullable<Array<string>>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get customMessage(): Nullable<string>;
        set customMessage(value: Nullable<string>);
        get guestExpirationTs(): Nullable<string>;
        set guestExpirationTs(value: Nullable<string>);
        get isRestricted(): boolean;
        set isRestricted(value: boolean);
        get isUltraRestricted(): boolean;
        set isUltraRestricted(value: boolean);
        get realName(): Nullable<string>;
        set realName(value: Nullable<string>);
        get isResend(): boolean;
        set isResend(value: boolean);
    }
    namespace AdminUsersInviteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersInviteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, userId: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace AdminUsersRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersSessionResetRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, userId: Nullable<string>, isMobileOnly: boolean, isWebOnly: boolean);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get isMobileOnly(): boolean;
        set isMobileOnly(value: boolean);
        get isWebOnly(): boolean;
        set isWebOnly(value: boolean);
    }
    namespace AdminUsersSessionResetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSessionResetRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersSetAdminRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, userId: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace AdminUsersSetAdminRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetAdminRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersSetOwnerRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, userId: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace AdminUsersSetOwnerRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetOwnerRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.admin.users {
    class AdminUsersSetRegularRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, teamId: Nullable<string>, userId: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
    }
    namespace AdminUsersSetRegularRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetRegularRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.api {
    class ApiTestRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string> | undefined, foo: Nullable<string>, error: Nullable<string>);
        get foo(): Nullable<string>;
        set foo(value: Nullable<string>);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
    }
    namespace ApiTestRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApiTestRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.apps {
    class AppsUninstallRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, clientId: Nullable<string>, clientSecret: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
    }
    namespace AppsUninstallRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsUninstallRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.apps.connections {
    class AppsConnectionsOpenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace AppsConnectionsOpenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsConnectionsOpenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.auth {
    class AuthRevokeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, isTest: boolean);
        get isTest(): boolean;
        set isTest(value: boolean);
    }
    namespace AuthRevokeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthRevokeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.auth {
    class AuthTeamsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor?: Nullable<string>, includeIcon?: Nullable<boolean>, limit?: Nullable<number>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get includeIcon(): Nullable<boolean>;
        set includeIcon(value: Nullable<boolean>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace AuthTeamsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthTeamsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.auth {
    class AuthTestRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace AuthTestRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthTestRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.bookmarks {
    class BookmarksAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channelId: Nullable<string>, title: Nullable<string>, type: Nullable<string>, emoji?: Nullable<string>, link?: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
        get link(): Nullable<string>;
        set link(value: Nullable<string>);
    }
    namespace BookmarksAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.bookmarks {
    class BookmarksEditRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, bookmarkId: Nullable<string>, channelId: Nullable<string>, emoji?: Nullable<string>, link?: Nullable<string>, title?: Nullable<string>);
        get bookmarkId(): Nullable<string>;
        set bookmarkId(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
        get link(): Nullable<string>;
        set link(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
    }
    namespace BookmarksEditRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksEditRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.bookmarks {
    class BookmarksListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channelId: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace BookmarksListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.bookmarks {
    class BookmarksRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, bookmarkId: Nullable<string>, channelId: Nullable<string>);
        get bookmarkId(): Nullable<string>;
        set bookmarkId(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace BookmarksRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.bots {
    class BotsInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, bot: Nullable<string>);
        get bot(): Nullable<string>;
        set bot(value: Nullable<string>);
    }
    namespace BotsInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotsInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls {
    class CallsAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalUniqueId: Nullable<string>, joinUrl: Nullable<string>, createdBy?: Nullable<string>, dateStart?: Nullable<number>, desktopAppJoinUrl?: Nullable<string>, externalDisplayId?: Nullable<string>, title?: Nullable<string>, users?: Nullable<string>);
        get externalUniqueId(): Nullable<string>;
        set externalUniqueId(value: Nullable<string>);
        get joinUrl(): Nullable<string>;
        set joinUrl(value: Nullable<string>);
        get createdBy(): Nullable<string>;
        set createdBy(value: Nullable<string>);
        get dateStart(): Nullable<number>;
        set dateStart(value: Nullable<number>);
        get desktopAppJoinUrl(): Nullable<string>;
        set desktopAppJoinUrl(value: Nullable<string>);
        get externalDisplayId(): Nullable<string>;
        set externalDisplayId(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get users(): Nullable<string>;
        set users(value: Nullable<string>);
    }
    namespace CallsAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls {
    class CallsEndRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, id: Nullable<string>, duration?: Nullable<number>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get duration(): Nullable<number>;
        set duration(value: Nullable<number>);
    }
    namespace CallsEndRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsEndRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls {
    class CallsInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, id: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
    }
    namespace CallsInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls {
    class CallsUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, id: Nullable<string>, desktopAppJoinUrl?: Nullable<string>, joinUrl?: Nullable<string>, title?: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get desktopAppJoinUrl(): Nullable<string>;
        set desktopAppJoinUrl(value: Nullable<string>);
        get joinUrl(): Nullable<string>;
        set joinUrl(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
    }
    namespace CallsUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls.participants {
    class CallsParticipantsAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, id: Nullable<string>, users: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get users(): Nullable<string>;
        set users(value: Nullable<string>);
    }
    namespace CallsParticipantsAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsParticipantsAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.calls.participants {
    class CallsParticipantsRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, id: Nullable<string>, users: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get users(): Nullable<string>;
        set users(value: Nullable<string>);
    }
    namespace CallsParticipantsRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsParticipantsRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatAppendStreamRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, streamId: Nullable<string>, channel: Nullable<string>, text: Nullable<string>);
        get streamId(): Nullable<string>;
        set streamId(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
    }
    namespace ChatAppendStreamRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatAppendStreamRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatDeleteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, ts: Nullable<string>, channel: Nullable<string>, isAsUser: boolean);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get isAsUser(): boolean;
        set isAsUser(value: boolean);
    }
    namespace ChatDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatDeleteScheduledMessageRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, scheduledMessageId: Nullable<string>, isAsUser: Nullable<boolean>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get scheduledMessageId(): Nullable<string>;
        set scheduledMessageId(value: Nullable<string>);
        get isAsUser(): Nullable<boolean>;
        set isAsUser(value: Nullable<boolean>);
    }
    namespace ChatDeleteScheduledMessageRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatDeleteScheduledMessageRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatGetPermalinkRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, messageTs: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get messageTs(): Nullable<string>;
        set messageTs(value: Nullable<string>);
    }
    namespace ChatGetPermalinkRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatGetPermalinkRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatMeMessageRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, text: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
    }
    namespace ChatMeMessageRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatMeMessageRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatPostEphemeralRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, text: Nullable<string>, user: Nullable<string>, isAsUser: boolean, blocks: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>, blocksAsString: Nullable<string>, attachments: Nullable<Array<work.socialhub.kslack.entity.Attachment>>, attachmentsAsString: Nullable<string>, isLinkNames: boolean, parse: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isAsUser(): boolean;
        set isAsUser(value: boolean);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get blocksAsString(): Nullable<string>;
        set blocksAsString(value: Nullable<string>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get attachmentsAsString(): Nullable<string>;
        set attachmentsAsString(value: Nullable<string>);
        get isLinkNames(): boolean;
        set isLinkNames(value: boolean);
        get parse(): Nullable<string>;
        set parse(value: Nullable<string>);
    }
    namespace ChatPostEphemeralRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatPostEphemeralRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatPostMessageRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, username: Nullable<string>, threadTs: Nullable<string>, channel: Nullable<string>, text: Nullable<string>, parse: Nullable<string>, isLinkNames: boolean, blocks: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>, blocksAsString: Nullable<string>, attachments: Nullable<Array<work.socialhub.kslack.entity.Attachment>>, attachmentsAsString: Nullable<string>, isUnfurlLinks: boolean, isUnfurlMedia: boolean, isAsUser: Nullable<boolean>, isMrkdwn: boolean | undefined, iconUrl: Nullable<string>, iconEmoji: Nullable<string>, isReplyBroadcast: boolean);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get parse(): Nullable<string>;
        set parse(value: Nullable<string>);
        get isLinkNames(): boolean;
        set isLinkNames(value: boolean);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get blocksAsString(): Nullable<string>;
        set blocksAsString(value: Nullable<string>);
        get attachmentsAsString(): Nullable<string>;
        set attachmentsAsString(value: Nullable<string>);
        get isUnfurlLinks(): boolean;
        set isUnfurlLinks(value: boolean);
        get isUnfurlMedia(): boolean;
        set isUnfurlMedia(value: boolean);
        get isAsUser(): Nullable<boolean>;
        set isAsUser(value: Nullable<boolean>);
        get isMrkdwn(): boolean;
        set isMrkdwn(value: boolean);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get iconEmoji(): Nullable<string>;
        set iconEmoji(value: Nullable<string>);
        get isReplyBroadcast(): boolean;
        set isReplyBroadcast(value: boolean);
    }
    namespace ChatPostMessageRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatPostMessageRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatScheduleMessageRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, postAt: Nullable<number>, text: Nullable<string>, isAsUser: Nullable<boolean>, attachments: Nullable<Array<work.socialhub.kslack.entity.Attachment>>, attachmentsAsString: Nullable<string>, blocks: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>, blocksAsString: Nullable<string>, isLinkNames: boolean, parse: Nullable<string>, isReplyBroadcast: boolean, threadTs: Nullable<string>, isUnfurlLinks: boolean, isUnfurlMedia: boolean);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get postAt(): Nullable<number>;
        set postAt(value: Nullable<number>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get isAsUser(): Nullable<boolean>;
        set isAsUser(value: Nullable<boolean>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get attachmentsAsString(): Nullable<string>;
        set attachmentsAsString(value: Nullable<string>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get blocksAsString(): Nullable<string>;
        set blocksAsString(value: Nullable<string>);
        get isLinkNames(): boolean;
        set isLinkNames(value: boolean);
        get parse(): Nullable<string>;
        set parse(value: Nullable<string>);
        get isReplyBroadcast(): boolean;
        set isReplyBroadcast(value: boolean);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get isUnfurlLinks(): boolean;
        set isUnfurlLinks(value: boolean);
        get isUnfurlMedia(): boolean;
        set isUnfurlMedia(value: boolean);
    }
    namespace ChatScheduleMessageRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatScheduleMessageRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatStartStreamRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, threadTs?: Nullable<string>, text?: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
    }
    namespace ChatStartStreamRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatStartStreamRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatStopStreamRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, streamId: Nullable<string>, channel: Nullable<string>);
        get streamId(): Nullable<string>;
        set streamId(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ChatStopStreamRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatStopStreamRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatUnfurlRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, userAuthMessage: Nullable<string>, isUserAuthRequired: boolean, rawUnfurls: Nullable<string>, unfurls: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.api.methods.request.chat.ChatUnfurlRequest.UnfurlDetail>>, ts: Nullable<string>, userAuthUrl: Nullable<string>, channel: Nullable<string>);
        get userAuthMessage(): Nullable<string>;
        set userAuthMessage(value: Nullable<string>);
        get isUserAuthRequired(): boolean;
        set isUserAuthRequired(value: boolean);
        get rawUnfurls(): Nullable<string>;
        set rawUnfurls(value: Nullable<string>);
        get unfurls(): Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.api.methods.request.chat.ChatUnfurlRequest.UnfurlDetail>>;
        set unfurls(value: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.api.methods.request.chat.ChatUnfurlRequest.UnfurlDetail>>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get userAuthUrl(): Nullable<string>;
        set userAuthUrl(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ChatUnfurlRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatUnfurlRequest;
        }
        class UnfurlDetail {
            constructor();
            get title(): Nullable<string>;
            set title(value: Nullable<string>);
            get text(): Nullable<string>;
            set text(value: Nullable<string>);
            get callbackId(): Nullable<string>;
            set callbackId(value: Nullable<string>);
            get attachmentType(): Nullable<string>;
            set attachmentType(value: Nullable<string>);
            get fallback(): Nullable<string>;
            set fallback(value: Nullable<string>);
            get actions(): Nullable<Array<work.socialhub.kslack.entity.Action>>;
            set actions(value: Nullable<Array<work.socialhub.kslack.entity.Action>>);
            get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
            set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        }
        namespace UnfurlDetail {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => UnfurlDetail;
            }
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat {
    class ChatUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, ts: Nullable<string>, text: Nullable<string>, user: Nullable<string>, isAsUser: boolean, blocks: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>, blocksAsString: Nullable<string>, attachments: Nullable<Array<work.socialhub.kslack.entity.Attachment>>, attachmentsAsString: Nullable<string>, isLinkNames: boolean, parse: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isAsUser(): boolean;
        set isAsUser(value: boolean);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get blocksAsString(): Nullable<string>;
        set blocksAsString(value: Nullable<string>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get attachmentsAsString(): Nullable<string>;
        set attachmentsAsString(value: Nullable<string>);
        get isLinkNames(): boolean;
        set isLinkNames(value: boolean);
        get parse(): Nullable<string>;
        set parse(value: Nullable<string>);
    }
    namespace ChatUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.chat.scheduled_messages {
    class ChatScheduleMessagesListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, cursor: Nullable<string>, latest: Nullable<string>, limit: Nullable<number>, oldest: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get latest(): Nullable<string>;
        set latest(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get oldest(): Nullable<string>;
        set oldest(value: Nullable<string>);
    }
    namespace ChatScheduleMessagesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatScheduleMessagesListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsAcceptSharedInviteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channelName: Nullable<string>, channelId?: Nullable<string>, freeTrialAccepted?: Nullable<boolean>, inviteId?: Nullable<string>, isPrivate?: Nullable<boolean>, teamId?: Nullable<string>);
        get channelName(): Nullable<string>;
        set channelName(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get freeTrialAccepted(): Nullable<boolean>;
        set freeTrialAccepted(value: Nullable<boolean>);
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
        get isPrivate(): Nullable<boolean>;
        set isPrivate(value: Nullable<boolean>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace ConversationsAcceptSharedInviteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsAcceptSharedInviteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsApproveSharedInviteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteId: Nullable<string>, targetApprovalsChannelId?: Nullable<string>);
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
        get targetApprovalsChannelId(): Nullable<string>;
        set targetApprovalsChannelId(value: Nullable<string>);
    }
    namespace ConversationsApproveSharedInviteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsApproveSharedInviteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsArchiveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ConversationsArchiveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsArchiveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsCanvasesCreateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channelId: Nullable<string>, documentContent?: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get documentContent(): Nullable<string>;
        set documentContent(value: Nullable<string>);
    }
    namespace ConversationsCanvasesCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCanvasesCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsCloseRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ConversationsCloseRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCloseRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsCreateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, name: Nullable<string>, isPrivate: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get isPrivate(): boolean;
        set isPrivate(value: boolean);
    }
    namespace ConversationsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsDeclineSharedInviteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteId: Nullable<string>, targetApprovalsChannelId?: Nullable<string>);
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
        get targetApprovalsChannelId(): Nullable<string>;
        set targetApprovalsChannelId(value: Nullable<string>);
    }
    namespace ConversationsDeclineSharedInviteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsDeclineSharedInviteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsHistoryRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, cursor: Nullable<string>, oldest: Nullable<string>, latest: Nullable<string>, limit: Nullable<number>, isInclusive: boolean);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get oldest(): Nullable<string>;
        set oldest(value: Nullable<string>);
        get latest(): Nullable<string>;
        set latest(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get isInclusive(): boolean;
        set isInclusive(value: boolean);
    }
    namespace ConversationsHistoryRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsHistoryRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, isIncludeLocale: boolean, isIncludeNumMembers: boolean);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get isIncludeLocale(): boolean;
        set isIncludeLocale(value: boolean);
        get isIncludeNumMembers(): boolean;
        set isIncludeNumMembers(value: boolean);
    }
    namespace ConversationsInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsInviteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, users: Nullable<Array<string>>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
    }
    namespace ConversationsInviteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInviteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsInviteSharedRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, emails?: Nullable<string>, userIds?: Nullable<string>, externalLimited?: Nullable<boolean>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get emails(): Nullable<string>;
        set emails(value: Nullable<string>);
        get userIds(): Nullable<string>;
        set userIds(value: Nullable<string>);
        get externalLimited(): Nullable<boolean>;
        set externalLimited(value: Nullable<boolean>);
    }
    namespace ConversationsInviteSharedRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInviteSharedRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsJoinRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ConversationsJoinRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsJoinRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsKickRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, user: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
    }
    namespace ConversationsKickRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsKickRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsLeaveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ConversationsLeaveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsLeaveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsListConnectInvitesRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, count?: Nullable<number>, cursor?: Nullable<string>, teamId?: Nullable<string>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace ConversationsListConnectInvitesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsListConnectInvitesRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, isExcludeArchived: boolean, limit: Nullable<number>, types: Nullable<Array<work.socialhub.kslack.entity.ConversationType>>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get isExcludeArchived(): boolean;
        set isExcludeArchived(value: boolean);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get types(): Nullable<Array<work.socialhub.kslack.entity.ConversationType>>;
        set types(value: Nullable<Array<work.socialhub.kslack.entity.ConversationType>>);
    }
    namespace ConversationsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsMarkRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, ts: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace ConversationsMarkRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsMarkRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsMembersRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
    }
    namespace ConversationsMembersRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsMembersRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsOpenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, isReturnIm: boolean, users: Nullable<Array<string>>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get isReturnIm(): boolean;
        set isReturnIm(value: boolean);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
    }
    namespace ConversationsOpenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsOpenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsRenameRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, name: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace ConversationsRenameRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRenameRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsRepliesRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, isInclusive: boolean, ts: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, channel: Nullable<string>, oldest: Nullable<string>, latest: Nullable<string>);
        get isInclusive(): boolean;
        set isInclusive(value: boolean);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get oldest(): Nullable<string>;
        set oldest(value: Nullable<string>);
        get latest(): Nullable<string>;
        set latest(value: Nullable<string>);
    }
    namespace ConversationsRepliesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRepliesRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsRequestSharedInviteApproveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteId: Nullable<string>, channelId?: Nullable<string>);
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace ConversationsRequestSharedInviteApproveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteApproveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsRequestSharedInviteDenyRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, inviteId: Nullable<string>);
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
    }
    namespace ConversationsRequestSharedInviteDenyRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteDenyRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsRequestSharedInviteListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor?: Nullable<string>, limit?: Nullable<number>, isApproved?: Nullable<boolean>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get isApproved(): Nullable<boolean>;
        set isApproved(value: Nullable<boolean>);
    }
    namespace ConversationsRequestSharedInviteListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsSetPurposeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, purpose: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get purpose(): Nullable<string>;
        set purpose(value: Nullable<string>);
    }
    namespace ConversationsSetPurposeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsSetPurposeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsSetTopicRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, topic: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get topic(): Nullable<string>;
        set topic(value: Nullable<string>);
    }
    namespace ConversationsSetTopicRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsSetTopicRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.conversations {
    class ConversationsUnarchiveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace ConversationsUnarchiveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsUnarchiveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dialog {
    class DialogOpenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, dialog: Nullable<work.socialhub.kslack.entity.dialog.Dialog>, dialogAsString: Nullable<string>, triggerId: Nullable<string>);
        get dialog(): Nullable<work.socialhub.kslack.entity.dialog.Dialog>;
        set dialog(value: Nullable<work.socialhub.kslack.entity.dialog.Dialog>);
        get dialogAsString(): Nullable<string>;
        set dialogAsString(value: Nullable<string>);
        get triggerId(): Nullable<string>;
        set triggerId(value: Nullable<string>);
    }
    namespace DialogOpenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogOpenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dnd {
    class DndEndDndRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace DndEndDndRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndEndDndRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dnd {
    class DndEndSnoozeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace DndEndSnoozeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndEndSnoozeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dnd {
    class DndInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
    }
    namespace DndInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dnd {
    class DndSetSnoozeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, numMinutes: Nullable<number>);
        get numMinutes(): Nullable<number>;
        set numMinutes(value: Nullable<number>);
    }
    namespace DndSetSnoozeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndSetSnoozeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.dnd {
    class DndTeamInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, users: Nullable<Array<string>>);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
    }
    namespace DndTeamInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndTeamInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.emoji {
    class EmojiListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace EmojiListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmojiListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesCompleteUploadExternalRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, files: Nullable<string>, channelId?: Nullable<string>, initialComment?: Nullable<string>, threadTs?: Nullable<string>);
        get files(): Nullable<string>;
        set files(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get initialComment(): Nullable<string>;
        set initialComment(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
    }
    namespace FilesCompleteUploadExternalRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesCompleteUploadExternalRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesDeleteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
    }
    namespace FilesDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesGetUploadURLExternalRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, filename: Nullable<string>, length: Nullable<number>, altTxt?: Nullable<string>, snippetType?: Nullable<string>);
        get filename(): Nullable<string>;
        set filename(value: Nullable<string>);
        get length(): Nullable<number>;
        set length(value: Nullable<number>);
        get altTxt(): Nullable<string>;
        set altTxt(value: Nullable<string>);
        get snippetType(): Nullable<string>;
        set snippetType(value: Nullable<string>);
    }
    namespace FilesGetUploadURLExternalRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesGetUploadURLExternalRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>, count: Nullable<number>, page: Nullable<number>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace FilesInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, channel: Nullable<string>, tsFrom: Nullable<string>, tsTo: Nullable<string>, types: Nullable<Array<string>>, count: Nullable<number>, page: Nullable<number>, isShowFilesHiddenByLimit: boolean);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get tsFrom(): Nullable<string>;
        set tsFrom(value: Nullable<string>);
        get tsTo(): Nullable<string>;
        set tsTo(value: Nullable<string>);
        get types(): Nullable<Array<string>>;
        set types(value: Nullable<Array<string>>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
        get isShowFilesHiddenByLimit(): boolean;
        set isShowFilesHiddenByLimit(value: boolean);
    }
    namespace FilesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesRevokePublicURLRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
    }
    namespace FilesRevokePublicURLRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRevokePublicURLRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files {
    class FilesSharedPublicURLRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
    }
    namespace FilesSharedPublicURLRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesSharedPublicURLRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalId: Nullable<string>, externalUrl: Nullable<string>, title: Nullable<string>, filetype: Nullable<string>, indexableFileContents: Int8Array, previewImage: Int8Array);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get externalUrl(): Nullable<string>;
        set externalUrl(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get filetype(): Nullable<string>;
        set filetype(value: Nullable<string>);
        get indexableFileContents(): Int8Array;
        set indexableFileContents(value: Int8Array);
        get previewImage(): Int8Array;
        set previewImage(value: Int8Array);
    }
    namespace FilesRemoteAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalId: Nullable<string>, file: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
    }
    namespace FilesRemoteInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, tsFrom: Nullable<string>, tsTo: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get tsFrom(): Nullable<string>;
        set tsFrom(value: Nullable<string>);
        get tsTo(): Nullable<string>;
        set tsTo(value: Nullable<string>);
    }
    namespace FilesRemoteListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalId: Nullable<string>, file: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
    }
    namespace FilesRemoteRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteShareRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalId: Nullable<string>, file: Nullable<string>, channels: Nullable<Array<string>>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
    }
    namespace FilesRemoteShareRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteShareRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.files.remote {
    class FilesRemoteUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, externalId: Nullable<string>, externalUrl: Nullable<string>, title: Nullable<string>, filetype: Nullable<string>, indexableFileContents: Int8Array, previewImage: Int8Array);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get externalUrl(): Nullable<string>;
        set externalUrl(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get filetype(): Nullable<string>;
        set filetype(value: Nullable<string>);
        get indexableFileContents(): Int8Array;
        set indexableFileContents(value: Int8Array);
        get previewImage(): Int8Array;
        set previewImage(value: Int8Array);
    }
    namespace FilesRemoteUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.migration {
    class MigrationExchangeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, isToOld: boolean, users: Nullable<Array<string>>);
        get isToOld(): boolean;
        set isToOld(value: boolean);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
    }
    namespace MigrationExchangeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MigrationExchangeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.oauth {
    class OAuthAccessRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, clientId: Nullable<string>, clientSecret: Nullable<string>, code: Nullable<string>, redirectUri: Nullable<string>, isSingleChannel: boolean);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get isSingleChannel(): boolean;
        set isSingleChannel(value: boolean);
    }
    namespace OAuthAccessRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAccessRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.oauth {
    class OAuthTokenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, clientId: Nullable<string>, clientSecret: Nullable<string>, code: Nullable<string>, redirectUri: Nullable<string>, isSingleChannel: boolean);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get isSingleChannel(): boolean;
        set isSingleChannel(value: boolean);
    }
    namespace OAuthTokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthTokenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.oauth {
    class OAuthV2AccessRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest */ {
        constructor(token: Nullable<string>, clientId: Nullable<string>, clientSecret: Nullable<string>, code: Nullable<string>, redirectUri: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
    }
    namespace OAuthV2AccessRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2AccessRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.oauth {
    class OAuthV2ExchangeRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, clientId: Nullable<string>, clientSecret: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
    }
    namespace OAuthV2ExchangeRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2ExchangeRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.openid.connect {
    class OpenIDConnectTokenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string> | undefined, clientId: Nullable<string>, clientSecret: Nullable<string>, code: Nullable<string>, redirectUri?: Nullable<string>, grantType?: Nullable<string>, refreshToken?: Nullable<string>);
        get clientId(): Nullable<string>;
        set clientId(value: Nullable<string>);
        get clientSecret(): Nullable<string>;
        set clientSecret(value: Nullable<string>);
        get code(): Nullable<string>;
        set code(value: Nullable<string>);
        get redirectUri(): Nullable<string>;
        set redirectUri(value: Nullable<string>);
        get grantType(): Nullable<string>;
        set grantType(value: Nullable<string>);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
    }
    namespace OpenIDConnectTokenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OpenIDConnectTokenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.openid.connect {
    class OpenIDConnectUserInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace OpenIDConnectUserInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OpenIDConnectUserInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.pins {
    class PinsAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, timestamp: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace PinsAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.pins {
    class PinsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
    }
    namespace PinsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.pins {
    class PinsRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, channel: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, timestamp: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace PinsRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reactions {
    class ReactionsAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, name: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, channel: Nullable<string>, timestamp: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace ReactionsAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reactions {
    class ReactionsGetRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, channel: Nullable<string>, timestamp: Nullable<string>, isFull: boolean);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
        get isFull(): boolean;
        set isFull(value: boolean);
    }
    namespace ReactionsGetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsGetRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reactions {
    class ReactionsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, isFull: boolean, count: Nullable<number>, page: Nullable<number>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isFull(): boolean;
        set isFull(value: boolean);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace ReactionsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reactions {
    class ReactionsRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, name: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, channel: Nullable<string>, timestamp: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace ReactionsRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reminders {
    class RemindersAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, text: Nullable<string>, time: Nullable<string>, user: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get time(): Nullable<string>;
        set time(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
    }
    namespace RemindersAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reminders {
    class RemindersCompleteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, reminder: Nullable<string>);
        get reminder(): Nullable<string>;
        set reminder(value: Nullable<string>);
    }
    namespace RemindersCompleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersCompleteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reminders {
    class RemindersDeleteRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, reminder: Nullable<string>);
        get reminder(): Nullable<string>;
        set reminder(value: Nullable<string>);
    }
    namespace RemindersDeleteRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersDeleteRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reminders {
    class RemindersInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, reminder: Nullable<string>);
        get reminder(): Nullable<string>;
        set reminder(value: Nullable<string>);
    }
    namespace RemindersInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.reminders {
    class RemindersListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace RemindersListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.search {
    class SearchAllRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, query: Nullable<string>, sort: Nullable<string>, sortDir: Nullable<string>, isHighlight: boolean, count: Nullable<number>, page: Nullable<number>);
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get sort(): Nullable<string>;
        set sort(value: Nullable<string>);
        get sortDir(): Nullable<string>;
        set sortDir(value: Nullable<string>);
        get isHighlight(): boolean;
        set isHighlight(value: boolean);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace SearchAllRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchAllRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.search {
    class SearchFilesRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, sortDir: Nullable<string>, query: Nullable<string>, sort: Nullable<string>, isHighlight: boolean, count: Nullable<number>, page: Nullable<number>);
        get sortDir(): Nullable<string>;
        set sortDir(value: Nullable<string>);
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get sort(): Nullable<string>;
        set sort(value: Nullable<string>);
        get isHighlight(): boolean;
        set isHighlight(value: boolean);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace SearchFilesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchFilesRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.search {
    class SearchMessagesRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, sortDir: Nullable<string>, query: Nullable<string>, sort: Nullable<string>, isHighlight: boolean, count: Nullable<number>, page: Nullable<number>);
        get sortDir(): Nullable<string>;
        set sortDir(value: Nullable<string>);
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get sort(): Nullable<string>;
        set sort(value: Nullable<string>);
        get isHighlight(): boolean;
        set isHighlight(value: boolean);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace SearchMessagesRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchMessagesRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.stars {
    class StarsAddRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, channel: Nullable<string>, timestamp: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace StarsAddRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsAddRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.stars {
    class StarsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, count: Nullable<number>, page: Nullable<number>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace StarsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.stars {
    class StarsRemoveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, file: Nullable<string>, fileComment: Nullable<string>, channel: Nullable<string>, timestamp: Nullable<string>);
        get file(): Nullable<string>;
        set file(value: Nullable<string>);
        get fileComment(): Nullable<string>;
        set fileComment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
    }
    namespace StarsRemoveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsRemoveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team {
    class TeamAccessLogsRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, before: Nullable<number>, count: Nullable<number>, page: Nullable<number>);
        get before(): Nullable<number>;
        set before(value: Nullable<number>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace TeamAccessLogsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamAccessLogsRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team {
    class TeamBillableInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
    }
    namespace TeamBillableInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamBillableInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team {
    class TeamInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace TeamInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team {
    class TeamIntegrationLogsRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, serviceId: Nullable<string>, user: Nullable<string>, appId: Nullable<number>, changeType: Nullable<string>, count: Nullable<number>, page: Nullable<number>);
        get serviceId(): Nullable<string>;
        set serviceId(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get appId(): Nullable<number>;
        set appId(value: Nullable<number>);
        get changeType(): Nullable<string>;
        set changeType(value: Nullable<string>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
    }
    namespace TeamIntegrationLogsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamIntegrationLogsRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team.billing {
    class TeamBillingInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace TeamBillingInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamBillingInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team.external_teams {
    class TeamExternalTeamsDisconnectRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, targetTeam: Nullable<string>);
        get targetTeam(): Nullable<string>;
        set targetTeam(value: Nullable<string>);
    }
    namespace TeamExternalTeamsDisconnectRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamExternalTeamsDisconnectRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team.external_teams {
    class TeamExternalTeamsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, connectionStatusFilter?: Nullable<string>, cursor?: Nullable<string>, limit?: Nullable<number>, slackConnectPrefFilter?: Nullable<string>, sortDirection?: Nullable<string>, sortField?: Nullable<string>, workspaceFilter?: Nullable<string>);
        get connectionStatusFilter(): Nullable<string>;
        set connectionStatusFilter(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get slackConnectPrefFilter(): Nullable<string>;
        set slackConnectPrefFilter(value: Nullable<string>);
        get sortDirection(): Nullable<string>;
        set sortDirection(value: Nullable<string>);
        get sortField(): Nullable<string>;
        set sortField(value: Nullable<string>);
        get workspaceFilter(): Nullable<string>;
        set workspaceFilter(value: Nullable<string>);
    }
    namespace TeamExternalTeamsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamExternalTeamsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team.preferences {
    class TeamPreferencesListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace TeamPreferencesListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamPreferencesListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.team.profile {
    class TeamProfileGetRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, visibility: Nullable<string>);
        get visibility(): Nullable<string>;
        set visibility(value: Nullable<string>);
    }
    namespace TeamProfileGetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamProfileGetRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups {
    class UsergroupsCreateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, name: Nullable<string>, handle: Nullable<string>, description: Nullable<string>, channels: Nullable<Array<string>>, isIncludeCount: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get handle(): Nullable<string>;
        set handle(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
    }
    namespace UsergroupsCreateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsCreateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups {
    class UsergroupsDisableRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, usergroup: Nullable<string>, isIncludeCount: boolean);
        get usergroup(): Nullable<string>;
        set usergroup(value: Nullable<string>);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
    }
    namespace UsergroupsDisableRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsDisableRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups {
    class UsergroupsEnableRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, usergroup: Nullable<string>, isIncludeCount: boolean);
        get usergroup(): Nullable<string>;
        set usergroup(value: Nullable<string>);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
    }
    namespace UsergroupsEnableRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsEnableRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups {
    class UsergroupsListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, isIncludeDisabled: boolean, isIncludeCount: boolean, isIncludeUsers: boolean);
        get isIncludeDisabled(): boolean;
        set isIncludeDisabled(value: boolean);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
        get isIncludeUsers(): boolean;
        set isIncludeUsers(value: boolean);
    }
    namespace UsergroupsListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups {
    class UsergroupsUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, usergroup: Nullable<string>, name: Nullable<string>, handle: Nullable<string>, description: Nullable<string>, channels: Nullable<Array<string>>, isIncludeCount: boolean);
        get usergroup(): Nullable<string>;
        set usergroup(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get handle(): Nullable<string>;
        set handle(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
    }
    namespace UsergroupsUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups.users {
    class UsergroupUsersListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, usergroup: Nullable<string>, isIncludeDisabled: boolean);
        get usergroup(): Nullable<string>;
        set usergroup(value: Nullable<string>);
        get isIncludeDisabled(): boolean;
        set isIncludeDisabled(value: boolean);
    }
    namespace UsergroupUsersListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupUsersListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.usergroups.users {
    class UsergroupUsersUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, usergroup: Nullable<string>, users: Nullable<Array<string>>, isIncludeCount: boolean);
        get usergroup(): Nullable<string>;
        set usergroup(value: Nullable<string>);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
        get isIncludeCount(): boolean;
        set isIncludeCount(value: boolean);
    }
    namespace UsergroupUsersUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupUsersUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersConversationsRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, cursor: Nullable<string>, isExcludeArchived: boolean, limit: Nullable<number>, types: Nullable<Array<work.socialhub.kslack.entity.ConversationType>>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get isExcludeArchived(): boolean;
        set isExcludeArchived(value: boolean);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get types(): Nullable<Array<work.socialhub.kslack.entity.ConversationType>>;
        set types(value: Nullable<Array<work.socialhub.kslack.entity.ConversationType>>);
    }
    namespace UsersConversationsRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersConversationsRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersDeletePhotoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace UsersDeletePhotoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersDeletePhotoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersDiscoverableContactsLookupRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, email: Nullable<string>, visibility?: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get visibility(): Nullable<string>;
        set visibility(value: Nullable<string>);
    }
    namespace UsersDiscoverableContactsLookupRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersDiscoverableContactsLookupRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersGetPresenceRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
    }
    namespace UsersGetPresenceRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersGetPresenceRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersIdentityRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace UsersIdentityRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersIdentityRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersInfoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, isIncludeLocale: boolean);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isIncludeLocale(): boolean;
        set isIncludeLocale(value: boolean);
    }
    namespace UsersInfoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersInfoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersListRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, cursor: Nullable<string>, limit: Nullable<number>, isIncludeLocale: boolean, isPresence: boolean);
        get cursor(): Nullable<string>;
        set cursor(value: Nullable<string>);
        get limit(): Nullable<number>;
        set limit(value: Nullable<number>);
        get isIncludeLocale(): boolean;
        set isIncludeLocale(value: boolean);
        /** @deprecated  */
        get isPresence(): boolean;
        set isPresence(value: boolean);
    }
    namespace UsersListRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersLookupByEmailRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, email: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
    }
    namespace UsersLookupByEmailRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersLookupByEmailRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersSetActiveRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>);
    }
    namespace UsersSetActiveRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetActiveRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersSetPhotoRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, imageData: Int8Array, cropX: Nullable<number>, cropY: Nullable<number>, cropW: Nullable<number>);
        get imageData(): Int8Array;
        set imageData(value: Int8Array);
        get cropX(): Nullable<number>;
        set cropX(value: Nullable<number>);
        get cropY(): Nullable<number>;
        set cropY(value: Nullable<number>);
        get cropW(): Nullable<number>;
        set cropW(value: Nullable<number>);
    }
    namespace UsersSetPhotoRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetPhotoRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users {
    class UsersSetPresenceRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, presence: Nullable<string>);
        get presence(): Nullable<string>;
        set presence(value: Nullable<string>);
    }
    namespace UsersSetPresenceRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetPresenceRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users.profile {
    class UsersProfileGetRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, isIncludeLabels: boolean);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isIncludeLabels(): boolean;
        set isIncludeLabels(value: boolean);
    }
    namespace UsersProfileGetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersProfileGetRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.users.profile {
    class UsersProfileSetRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, user: Nullable<string>, profile: Nullable<work.socialhub.kslack.entity.user.Profile>, name: Nullable<string>, value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get profile(): Nullable<work.socialhub.kslack.entity.user.Profile>;
        set profile(value: Nullable<work.socialhub.kslack.entity.user.Profile>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace UsersProfileSetRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersProfileSetRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.views {
    class ViewsOpenRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, triggerId: Nullable<string>, view: Nullable<work.socialhub.kslack.entity.view.View>, viewAsString: Nullable<string>);
        get triggerId(): Nullable<string>;
        set triggerId(value: Nullable<string>);
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get viewAsString(): Nullable<string>;
        set viewAsString(value: Nullable<string>);
    }
    namespace ViewsOpenRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsOpenRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.views {
    class ViewsPublishRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, view: Nullable<work.socialhub.kslack.entity.view.View>, viewAsString: Nullable<string>, userId: Nullable<string>, hash: Nullable<string>);
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get viewAsString(): Nullable<string>;
        set viewAsString(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get hash(): Nullable<string>;
        set hash(value: Nullable<string>);
    }
    namespace ViewsPublishRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsPublishRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.views {
    class ViewsPushRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, triggerId: Nullable<string>, view: Nullable<work.socialhub.kslack.entity.view.View>, viewAsString: Nullable<string>);
        get triggerId(): Nullable<string>;
        set triggerId(value: Nullable<string>);
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get viewAsString(): Nullable<string>;
        set viewAsString(value: Nullable<string>);
    }
    namespace ViewsPushRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsPushRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.request.views {
    class ViewsUpdateRequest /* implements work.socialhub.kslack.api.methods.SlackApiRequest, work.socialhub.kslack.api.methods.FormRequest */ {
        constructor(token: Nullable<string>, view: Nullable<work.socialhub.kslack.entity.view.View>, viewAsString: Nullable<string>, externalId: Nullable<string>, hash: Nullable<string>, viewId: Nullable<string>);
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get viewAsString(): Nullable<string>;
        set viewAsString(value: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get hash(): Nullable<string>;
        set hash(value: Nullable<string>);
        get viewId(): Nullable<string>;
        set viewId(value: Nullable<string>);
    }
    namespace ViewsUpdateRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsUpdateRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.apps {
    class AdminAppsApproveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminAppsApproveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsApproveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.apps {
    class AdminAppsRequestsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get appRequests(): Nullable<Array<work.socialhub.kslack.entity.admin.AppRequest>>;
        set appRequests(value: Nullable<Array<work.socialhub.kslack.entity.admin.AppRequest>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.entity.ResponseMetadata>);
    }
    namespace AdminAppsRequestsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsRequestsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.apps {
    class AdminAppsRestrictResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminAppsRestrictResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminAppsRestrictResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.invite_requests {
    class AdminInviteRequestsApproveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminInviteRequestsApproveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsApproveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.invite_requests {
    class AdminInviteRequestsApprovedListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get approvedRequests(): Nullable<Array<string>>;
        set approvedRequests(value: Nullable<Array<string>>);
    }
    namespace AdminInviteRequestsApprovedListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsApprovedListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.invite_requests {
    class AdminInviteRequestsDeniedListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get deniedRequests(): Nullable<Array<string>>;
        set deniedRequests(value: Nullable<Array<string>>);
    }
    namespace AdminInviteRequestsDeniedListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsDeniedListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.invite_requests {
    class AdminInviteRequestsDenyResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminInviteRequestsDenyResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsDenyResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.invite_requests {
    class AdminInviteRequestsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get inviteRequests(): Nullable<Array<string>>;
        set inviteRequests(value: Nullable<Array<string>>);
    }
    namespace AdminInviteRequestsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminInviteRequestsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsAdminsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get adminIds(): Nullable<Array<string>>;
        set adminIds(value: Nullable<Array<string>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.entity.ResponseMetadata>);
    }
    namespace AdminTeamsAdminsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsAdminsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsCreateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminTeamsCreateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsCreateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsOwnersListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get ownerIds(): Nullable<Array<string>>;
        set ownerIds(value: Nullable<Array<string>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.entity.ResponseMetadata>);
    }
    namespace AdminTeamsOwnersListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsOwnersListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsSettingsSetDescriptionResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminTeamsSettingsSetDescriptionResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetDescriptionResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsSettingsSetIconResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminTeamsSettingsSetIconResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetIconResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.teams {
    class AdminTeamsSettingsSetNameResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminTeamsSettingsSetNameResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminTeamsSettingsSetNameResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersAssignResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersAssignResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersAssignResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersInviteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersInviteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersInviteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersSessionResetResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AdminUsersSessionResetResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSessionResetResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersSetAdminResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersSetAdminResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetAdminResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersSetOwnerResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersSetOwnerResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetOwnerResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.admin.users {
    class AdminUsersSetRegularResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AdminUsersSetRegularResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AdminUsersSetRegularResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.api {
    class ApiTestResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get args(): Nullable<work.socialhub.kslack.entity.Args>;
        set args(value: Nullable<work.socialhub.kslack.entity.Args>);
    }
    namespace ApiTestResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ApiTestResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.apps {
    class AppsUninstallResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace AppsUninstallResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsUninstallResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.apps.connections {
    class AppsConnectionsOpenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace AppsConnectionsOpenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppsConnectionsOpenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.auth {
    class AuthRevokeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isRevoked(): boolean;
        set isRevoked(value: boolean);
    }
    namespace AuthRevokeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthRevokeResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.auth {
    class AuthTeamsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get teams(): Nullable<Array<work.socialhub.kslack.entity.team.Team>>;
        set teams(value: Nullable<Array<work.socialhub.kslack.entity.team.Team>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace AuthTeamsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthTeamsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.auth {
    class AuthTestResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
    }
    namespace AuthTestResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AuthTestResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.bookmarks {
    class BookmarksAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get bookmark(): Nullable<work.socialhub.kslack.entity.Bookmark>;
        set bookmark(value: Nullable<work.socialhub.kslack.entity.Bookmark>);
    }
    namespace BookmarksAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.bookmarks {
    class BookmarksEditResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get bookmark(): Nullable<work.socialhub.kslack.entity.Bookmark>;
        set bookmark(value: Nullable<work.socialhub.kslack.entity.Bookmark>);
    }
    namespace BookmarksEditResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksEditResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.bookmarks {
    class BookmarksListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get bookmarks(): Nullable<Array<work.socialhub.kslack.entity.Bookmark>>;
        set bookmarks(value: Nullable<Array<work.socialhub.kslack.entity.Bookmark>>);
    }
    namespace BookmarksListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.bookmarks {
    class BookmarksRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace BookmarksRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BookmarksRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.bots {
    class BotsInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get bot(): Nullable<work.socialhub.kslack.entity.bot.Bot>;
        set bot(value: Nullable<work.socialhub.kslack.entity.bot.Bot>);
    }
    namespace BotsInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotsInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls {
    class CallsAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get call(): Nullable<work.socialhub.kslack.entity.call.Call>;
        set call(value: Nullable<work.socialhub.kslack.entity.call.Call>);
    }
    namespace CallsAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls {
    class CallsEndResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace CallsEndResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsEndResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls {
    class CallsInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get call(): Nullable<work.socialhub.kslack.entity.call.Call>;
        set call(value: Nullable<work.socialhub.kslack.entity.call.Call>);
    }
    namespace CallsInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls {
    class CallsUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get call(): Nullable<work.socialhub.kslack.entity.call.Call>;
        set call(value: Nullable<work.socialhub.kslack.entity.call.Call>);
    }
    namespace CallsUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls.participants {
    class CallsParticipantsAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace CallsParticipantsAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsParticipantsAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.calls.participants {
    class CallsParticipantsRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace CallsParticipantsRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallsParticipantsRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatAppendStreamResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ChatAppendStreamResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatAppendStreamResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatDeleteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace ChatDeleteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatDeleteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatDeleteScheduledMessageResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ChatDeleteScheduledMessageResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatDeleteScheduledMessageResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatGetPermalinkResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get permalink(): Nullable<string>;
        set permalink(value: Nullable<string>);
    }
    namespace ChatGetPermalinkResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatGetPermalinkResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatMeMessageResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace ChatMeMessageResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatMeMessageResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatPostEphemeralResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get messageTs(): Nullable<string>;
        set messageTs(value: Nullable<string>);
    }
    namespace ChatPostEphemeralResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatPostEphemeralResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatPostMessageResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get message(): Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */;
        set message(value: Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */);
    }
    namespace ChatPostMessageResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatPostMessageResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatScheduleMessageResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get scheduledMessageId(): Nullable<string>;
        set scheduledMessageId(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get postAt(): Nullable<number>;
        set postAt(value: Nullable<number>);
        get message(): Nullable<work.socialhub.kslack.entity.message.Message>;
        set message(value: Nullable<work.socialhub.kslack.entity.message.Message>);
    }
    namespace ChatScheduleMessageResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatScheduleMessageResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatStartStreamResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get streamId(): Nullable<string>;
        set streamId(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace ChatStartStreamResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatStartStreamResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatStopStreamResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace ChatStopStreamResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatStopStreamResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatUnfurlResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ChatUnfurlResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatUnfurlResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat {
    class ChatUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get message(): Nullable<work.socialhub.kslack.entity.message.Message>;
        set message(value: Nullable<work.socialhub.kslack.entity.message.Message>);
    }
    namespace ChatUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.chat.scheduled_messages {
    class ChatScheduleMessagesListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get scheduledMessages(): Nullable<Array<work.socialhub.kslack.entity.message.ScheduledMessage>>;
        set scheduledMessages(value: Nullable<Array<work.socialhub.kslack.entity.message.ScheduledMessage>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.entity.ResponseMetadata>);
    }
    namespace ChatScheduleMessagesListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChatScheduleMessagesListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsAcceptSharedInviteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get implicitApproval(): Nullable<boolean>;
        set implicitApproval(value: Nullable<boolean>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
    }
    namespace ConversationsAcceptSharedInviteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsAcceptSharedInviteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsApproveSharedInviteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsApproveSharedInviteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsApproveSharedInviteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsArchiveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsArchiveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsArchiveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsCanvasesCreateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get canvasId(): Nullable<string>;
        set canvasId(value: Nullable<string>);
    }
    namespace ConversationsCanvasesCreateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCanvasesCreateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsCloseResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsCloseResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCloseResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsCreateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get detail(): Nullable<string>;
        set detail(value: Nullable<string>);
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsCreateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsCreateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsDeclineSharedInviteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsDeclineSharedInviteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsDeclineSharedInviteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsHistoryResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get latest(): Nullable<string>;
        set latest(value: Nullable<string>);
        get messages(): Nullable<Array<work.socialhub.kslack.entity.message.Message>>;
        set messages(value: Nullable<Array<work.socialhub.kslack.entity.message.Message>>);
        get isHasMore(): boolean;
        set isHasMore(value: boolean);
        get pinCount(): Nullable<number>;
        set pinCount(value: Nullable<number>);
        get channelActionsTs(): Nullable<string>;
        set channelActionsTs(value: Nullable<string>);
        get channelActionsCount(): Nullable<number>;
        set channelActionsCount(value: Nullable<number>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsHistoryResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsHistoryResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsInviteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get errors(): Nullable<Array<work.socialhub.kslack.entity.Error>>;
        set errors(value: Nullable<Array<work.socialhub.kslack.entity.Error>>);
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsInviteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInviteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsInviteSharedResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get inviteId(): Nullable<string>;
        set inviteId(value: Nullable<string>);
        get confCode(): Nullable<string>;
        set confCode(value: Nullable<string>);
        get isLegacySharedChannel(): Nullable<boolean>;
        set isLegacySharedChannel(value: Nullable<boolean>);
    }
    namespace ConversationsInviteSharedResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsInviteSharedResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsJoinResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsJoinResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsJoinResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsKickResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsKickResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsKickResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsLeaveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isNotInChannel(): boolean;
        set isNotInChannel(value: boolean);
    }
    namespace ConversationsLeaveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsLeaveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsListConnectInvitesResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get invites(): Nullable<Array<work.socialhub.kslack.entity.connect.SharedInvite>>;
        set invites(value: Nullable<Array<work.socialhub.kslack.entity.connect.SharedInvite>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsListConnectInvitesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsListConnectInvitesResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channels(): Nullable<Array<work.socialhub.kslack.entity.Conversation>>;
        set channels(value: Nullable<Array<work.socialhub.kslack.entity.Conversation>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsMarkResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsMarkResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsMarkResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsMembersResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get members(): Nullable<Array<string>>;
        set members(value: Nullable<Array<string>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsMembersResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsMembersResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsOpenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isNoOp(): boolean;
        set isNoOp(value: boolean);
        get isAlreadyOpen(): boolean;
        set isAlreadyOpen(value: boolean);
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsOpenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsOpenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsRenameResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsRenameResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRenameResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsRepliesResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get messages(): Nullable<Array<work.socialhub.kslack.entity.message.Message>>;
        set messages(value: Nullable<Array<work.socialhub.kslack.entity.message.Message>>);
        get isHasMore(): boolean;
        set isHasMore(value: boolean);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsRepliesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRepliesResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsRequestSharedInviteApproveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsRequestSharedInviteApproveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteApproveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsRequestSharedInviteDenyResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsRequestSharedInviteDenyResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteDenyResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsRequestSharedInviteListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get invites(): Nullable<Array<work.socialhub.kslack.entity.connect.SharedInvite>>;
        set invites(value: Nullable<Array<work.socialhub.kslack.entity.connect.SharedInvite>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ConversationsRequestSharedInviteListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsRequestSharedInviteListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsSetPurposeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsSetPurposeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsSetPurposeResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsSetTopicResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channel(): Nullable<work.socialhub.kslack.entity.Conversation>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Conversation>);
    }
    namespace ConversationsSetTopicResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsSetTopicResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.conversations {
    class ConversationsUnarchiveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ConversationsUnarchiveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsUnarchiveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dialog {
    class DialogOpenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.entity.dialog.DialogResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.entity.dialog.DialogResponseMetadata>);
    }
    namespace DialogOpenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogOpenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dnd {
    class DndEndDndResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace DndEndDndResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndEndDndResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dnd {
    class DndEndSnoozeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isDndEnabled(): boolean;
        set isDndEnabled(value: boolean);
        get nextDndStartTs(): Nullable<number>;
        set nextDndStartTs(value: Nullable<number>);
        get nextDndEndTs(): Nullable<number>;
        set nextDndEndTs(value: Nullable<number>);
        get isSnoozeEnabled(): boolean;
        set isSnoozeEnabled(value: boolean);
    }
    namespace DndEndSnoozeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndEndSnoozeResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dnd {
    class DndInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isDndEnabled(): boolean;
        set isDndEnabled(value: boolean);
        get nextDndStartTs(): Nullable<number>;
        set nextDndStartTs(value: Nullable<number>);
        get nextDndEndTs(): Nullable<number>;
        set nextDndEndTs(value: Nullable<number>);
        get isSnoozeEnabled(): boolean;
        set isSnoozeEnabled(value: boolean);
        get snoozeEndtime(): Nullable<number>;
        set snoozeEndtime(value: Nullable<number>);
        get snoozeRemaining(): Nullable<number>;
        set snoozeRemaining(value: Nullable<number>);
    }
    namespace DndInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dnd {
    class DndSetSnoozeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get isSnoozeEnabled(): boolean;
        set isSnoozeEnabled(value: boolean);
        get snoozeEndtime(): Nullable<number>;
        set snoozeEndtime(value: Nullable<number>);
        get snoozeRemaining(): Nullable<number>;
        set snoozeRemaining(value: Nullable<number>);
    }
    namespace DndSetSnoozeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndSetSnoozeResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.dnd {
    class DndTeamInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get users(): Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.dnd.DndTeamMemberInfo>>;
        set users(value: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.dnd.DndTeamMemberInfo>>);
    }
    namespace DndTeamInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndTeamInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.emoji {
    class EmojiListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get emoji(): Nullable<kotlin.collections.KtMap<string, string>>;
        set emoji(value: Nullable<kotlin.collections.KtMap<string, string>>);
        get cacheTs(): Nullable<string>;
        set cacheTs(value: Nullable<string>);
    }
    namespace EmojiListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EmojiListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.entity {
    class ResponseMetadata {
        constructor();
        get messages(): Nullable<Array<string>>;
        set messages(value: Nullable<Array<string>>);
    }
    namespace ResponseMetadata {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseMetadata;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesCompleteUploadExternalResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get files(): Nullable<Array<work.socialhub.kslack.entity.file.File>>;
        set files(value: Nullable<Array<work.socialhub.kslack.entity.file.File>>);
    }
    namespace FilesCompleteUploadExternalResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesCompleteUploadExternalResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesDeleteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace FilesDeleteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesDeleteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesGetUploadURLExternalResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get uploadUrl(): Nullable<string>;
        set uploadUrl(value: Nullable<string>);
        get fileId(): Nullable<string>;
        set fileId(value: Nullable<string>);
    }
    namespace FilesGetUploadURLExternalResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesGetUploadURLExternalResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
        get content(): Nullable<string>;
        set content(value: Nullable<string>);
        get contentHighlightHtml(): Nullable<string>;
        set contentHighlightHtml(value: Nullable<string>);
        get contentHighlightCss(): Nullable<string>;
        set contentHighlightCss(value: Nullable<string>);
        get isTruncated(): boolean;
        set isTruncated(value: boolean);
        get comments(): Nullable<Array<work.socialhub.kslack.entity.file.FileComment>>;
        set comments(value: Nullable<Array<work.socialhub.kslack.entity.file.FileComment>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace FilesInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get files(): Nullable<Array<work.socialhub.kslack.entity.file.File>>;
        set files(value: Nullable<Array<work.socialhub.kslack.entity.file.File>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace FilesListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesRevokePublicURLResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
    }
    namespace FilesRevokePublicURLResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRevokePublicURLResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files {
    class FilesSharedPublicURLResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
        get comments(): Nullable<Array<work.socialhub.kslack.entity.file.FileComment>>;
        set comments(value: Nullable<Array<work.socialhub.kslack.entity.file.FileComment>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace FilesSharedPublicURLResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesSharedPublicURLResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
    }
    namespace FilesRemoteAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
    }
    namespace FilesRemoteInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get files(): Nullable<Array<work.socialhub.kslack.entity.file.File>>;
        set files(value: Nullable<Array<work.socialhub.kslack.entity.file.File>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace FilesRemoteListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace FilesRemoteRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteShareResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
    }
    namespace FilesRemoteShareResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteShareResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.files.remote {
    class FilesRemoteUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
    }
    namespace FilesRemoteUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilesRemoteUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.migration {
    class MigrationExchangeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get invalidUserIds(): Nullable<Array<string>>;
        set invalidUserIds(value: Nullable<Array<string>>);
        get userIdMap(): Nullable<kotlin.collections.KtMap<string, string>>;
        set userIdMap(value: Nullable<kotlin.collections.KtMap<string, string>>);
    }
    namespace MigrationExchangeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MigrationExchangeResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.oauth {
    class OAuthAccessResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get teamName(): Nullable<string>;
        set teamName(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get incomingWebhook(): Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>;
        set incomingWebhook(value: Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>);
        get bot(): Nullable<work.socialhub.kslack.entity.oauth.OAuthBot>;
        set bot(value: Nullable<work.socialhub.kslack.entity.oauth.OAuthBot>);
        /** @deprecated  */
        get authorizingUser(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthAuthorizingUser>;
        set authorizingUser(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthAuthorizingUser>);
        /** @deprecated  */
        get installerUser(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthInstallerUser>;
        set installerUser(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthInstallerUser>);
        /** @deprecated  */
        get scopes(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthScopes>;
        set scopes(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthScopes>);
    }
    namespace OAuthAccessResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAccessResponse;
        }
    }
    /** @deprecated  */
    class OAuthAuthorizingUser {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get appHome(): Nullable<string>;
        set appHome(value: Nullable<string>);
    }
    namespace OAuthAuthorizingUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAuthorizingUser;
        }
    }
    /** @deprecated  */
    class OAuthInstallerUser {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get appHome(): Nullable<string>;
        set appHome(value: Nullable<string>);
    }
    namespace OAuthInstallerUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthInstallerUser;
        }
    }
    /** @deprecated  */
    class OAuthScopes {
        constructor();
        get appHome(): Nullable<Array<string>>;
        set appHome(value: Nullable<Array<string>>);
        get team(): Nullable<Array<string>>;
        set team(value: Nullable<Array<string>>);
        get channel(): Nullable<Array<string>>;
        set channel(value: Nullable<Array<string>>);
        get group(): Nullable<Array<string>>;
        set group(value: Nullable<Array<string>>);
        get mpim(): Nullable<Array<string>>;
        set mpim(value: Nullable<Array<string>>);
        get im(): Nullable<Array<string>>;
        set im(value: Nullable<Array<string>>);
        get user(): Nullable<Array<string>>;
        set user(value: Nullable<Array<string>>);
    }
    namespace OAuthScopes {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthScopes;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.oauth {
    class OAuthTokenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get teamName(): Nullable<string>;
        set teamName(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get incomingWebhook(): Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>;
        set incomingWebhook(value: Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>);
        get bot(): Nullable<work.socialhub.kslack.entity.oauth.OAuthBot>;
        set bot(value: Nullable<work.socialhub.kslack.entity.oauth.OAuthBot>);
    }
    namespace OAuthTokenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthTokenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.oauth {
    class OAuthV2AccessResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get authedUser(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthAuthedUser>;
        set authedUser(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthAuthedUser>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get botUserId(): Nullable<string>;
        set botUserId(value: Nullable<string>);
        get team(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthTeam>;
        set team(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthTeam>);
        get enterprise(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthEnterprise>;
        set enterprise(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthEnterprise>);
        get incomingWebhook(): Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>;
        set incomingWebhook(value: Nullable<work.socialhub.kslack.entity.oauth.OAuthIncomingWebhook>);
    }
    namespace OAuthV2AccessResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2AccessResponse;
        }
    }
    class OAuthAuthedUser {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
    }
    namespace OAuthAuthedUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthAuthedUser;
        }
    }
    class OAuthTeam {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace OAuthTeam {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthTeam;
        }
    }
    class OAuthEnterprise {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace OAuthEnterprise {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthEnterprise;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.oauth {
    class OAuthV2ExchangeResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get botUserId(): Nullable<string>;
        set botUserId(value: Nullable<string>);
        get team(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeTeam>;
        set team(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeTeam>);
        get enterprise(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeEnterprise>;
        set enterprise(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeEnterprise>);
        get authedUser(): Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeAuthedUser>;
        set authedUser(value: Nullable<work.socialhub.kslack.api.methods.response.oauth.OAuthV2ExchangeAuthedUser>);
    }
    namespace OAuthV2ExchangeResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2ExchangeResponse;
        }
    }
    class OAuthV2ExchangeTeam {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace OAuthV2ExchangeTeam {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2ExchangeTeam;
        }
    }
    class OAuthV2ExchangeEnterprise {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
    }
    namespace OAuthV2ExchangeEnterprise {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2ExchangeEnterprise;
        }
    }
    class OAuthV2ExchangeAuthedUser {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
    }
    namespace OAuthV2ExchangeAuthedUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthV2ExchangeAuthedUser;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.openid.connect {
    class OpenIDConnectTokenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get accessToken(): Nullable<string>;
        set accessToken(value: Nullable<string>);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
        get idToken(): Nullable<string>;
        set idToken(value: Nullable<string>);
        get refreshToken(): Nullable<string>;
        set refreshToken(value: Nullable<string>);
        get expiresIn(): Nullable<number>;
        set expiresIn(value: Nullable<number>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
    }
    namespace OpenIDConnectTokenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OpenIDConnectTokenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.openid.connect {
    class OpenIDConnectUserInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get sub(): Nullable<string>;
        set sub(value: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get emailVerified(): Nullable<boolean>;
        set emailVerified(value: Nullable<boolean>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get picture(): Nullable<string>;
        set picture(value: Nullable<string>);
        get givenName(): Nullable<string>;
        set givenName(value: Nullable<string>);
        get familyName(): Nullable<string>;
        set familyName(value: Nullable<string>);
        get locale(): Nullable<string>;
        set locale(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace OpenIDConnectUserInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OpenIDConnectUserInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.pins {
    class PinsAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace PinsAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.pins {
    class PinsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get items(): Nullable<Array<work.socialhub.kslack.api.methods.response.pins.MessageItem>>;
        set items(value: Nullable<Array<work.socialhub.kslack.api.methods.response.pins.MessageItem>>);
    }
    namespace PinsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsListResponse;
        }
    }
    class MessageItem {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get message(): Nullable<work.socialhub.kslack.entity.message.Message>;
        set message(value: Nullable<work.socialhub.kslack.entity.message.Message>);
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
        get comment(): Nullable<work.socialhub.kslack.entity.file.FileComment>;
        set comment(value: Nullable<work.socialhub.kslack.entity.file.FileComment>);
        get createdBy(): Nullable<string>;
        set createdBy(value: Nullable<string>);
        get created(): Nullable<number>;
        set created(value: Nullable<number>);
    }
    namespace MessageItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageItem;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.pins {
    class PinsRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace PinsRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PinsRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reactions {
    class ReactionsAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ReactionsAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reactions {
    class ReactionsGetResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get message(): Nullable<work.socialhub.kslack.entity.message.Message>;
        set message(value: Nullable<work.socialhub.kslack.entity.message.Message>);
    }
    namespace ReactionsGetResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsGetResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reactions {
    class ReactionsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get items(): Nullable<Array<work.socialhub.kslack.entity.Item>>;
        set items(value: Nullable<Array<work.socialhub.kslack.entity.Item>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace ReactionsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reactions {
    class ReactionsRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace ReactionsRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ReactionsRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reminders {
    class RemindersAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get reminder(): Nullable<work.socialhub.kslack.entity.Reminder>;
        set reminder(value: Nullable<work.socialhub.kslack.entity.Reminder>);
    }
    namespace RemindersAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reminders {
    class RemindersCompleteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace RemindersCompleteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersCompleteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reminders {
    class RemindersDeleteResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace RemindersDeleteResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersDeleteResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reminders {
    class RemindersInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get reminder(): Nullable<work.socialhub.kslack.entity.Reminder>;
        set reminder(value: Nullable<work.socialhub.kslack.entity.Reminder>);
    }
    namespace RemindersInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.reminders {
    class RemindersListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get reminders(): Nullable<Array<work.socialhub.kslack.entity.Reminder>>;
        set reminders(value: Nullable<Array<work.socialhub.kslack.entity.Reminder>>);
    }
    namespace RemindersListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RemindersListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.search {
    class SearchAllResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get messages(): Nullable<work.socialhub.kslack.entity.search.SearchResult>;
        set messages(value: Nullable<work.socialhub.kslack.entity.search.SearchResult>);
        get files(): Nullable<work.socialhub.kslack.entity.search.SearchResult>;
        set files(value: Nullable<work.socialhub.kslack.entity.search.SearchResult>);
        get posts(): Nullable<work.socialhub.kslack.api.methods.response.search.SearchAllResponse.Posts>;
        set posts(value: Nullable<work.socialhub.kslack.api.methods.response.search.SearchAllResponse.Posts>);
    }
    namespace SearchAllResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchAllResponse;
        }
        class Posts {
            constructor();
            get total(): Nullable<number>;
            set total(value: Nullable<number>);
            get matches(): Nullable<Array<string>>;
            set matches(value: Nullable<Array<string>>);
        }
        namespace Posts {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Posts;
            }
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.search {
    class SearchFilesResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get files(): Nullable<work.socialhub.kslack.entity.search.SearchResult>;
        set files(value: Nullable<work.socialhub.kslack.entity.search.SearchResult>);
    }
    namespace SearchFilesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchFilesResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.search {
    class SearchMessagesResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get query(): Nullable<string>;
        set query(value: Nullable<string>);
        get messages(): Nullable<work.socialhub.kslack.entity.search.SearchResult>;
        set messages(value: Nullable<work.socialhub.kslack.entity.search.SearchResult>);
    }
    namespace SearchMessagesResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchMessagesResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.stars {
    class StarsAddResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace StarsAddResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsAddResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.stars {
    class StarsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get items(): Nullable<Array<work.socialhub.kslack.entity.Item>>;
        set items(value: Nullable<Array<work.socialhub.kslack.entity.Item>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace StarsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.stars {
    class StarsRemoveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace StarsRemoveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StarsRemoveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team {
    class TeamAccessLogsResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get logins(): Nullable<Array<work.socialhub.kslack.entity.Login>>;
        set logins(value: Nullable<Array<work.socialhub.kslack.entity.Login>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace TeamAccessLogsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamAccessLogsResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team {
    class TeamBillableInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get billableInfo(): Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.BillableInfo>>;
        set billableInfo(value: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.BillableInfo>>);
    }
    namespace TeamBillableInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamBillableInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team {
    class TeamInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get team(): Nullable<work.socialhub.kslack.entity.team.Team>;
        set team(value: Nullable<work.socialhub.kslack.entity.team.Team>);
    }
    namespace TeamInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team {
    class TeamIntegrationLogsResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get logs(): Nullable<Array<work.socialhub.kslack.entity.IntegrationLog>>;
        set logs(value: Nullable<Array<work.socialhub.kslack.entity.IntegrationLog>>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
    }
    namespace TeamIntegrationLogsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamIntegrationLogsResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team.billing {
    class TeamBillingInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get plan(): Nullable<string>;
        set plan(value: Nullable<string>);
    }
    namespace TeamBillingInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamBillingInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team.external_teams {
    class TeamExternalTeamsDisconnectResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace TeamExternalTeamsDisconnectResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamExternalTeamsDisconnectResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team.external_teams {
    class TeamExternalTeamsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get organizations(): Nullable<Array<work.socialhub.kslack.api.methods.response.team.external_teams.ExternalTeam>>;
        set organizations(value: Nullable<Array<work.socialhub.kslack.api.methods.response.team.external_teams.ExternalTeam>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace TeamExternalTeamsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamExternalTeamsListResponse;
        }
    }
    class ExternalTeam {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get teamUrl(): Nullable<string>;
        set teamUrl(value: Nullable<string>);
        get dateConnected(): Nullable<number>;
        set dateConnected(value: Nullable<number>);
        get connectionStatus(): Nullable<string>;
        set connectionStatus(value: Nullable<string>);
    }
    namespace ExternalTeam {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ExternalTeam;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team.preferences {
    class TeamPreferencesListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get allowMessageDeletion(): Nullable<boolean>;
        set allowMessageDeletion(value: Nullable<boolean>);
        get displayRealNames(): Nullable<boolean>;
        set displayRealNames(value: Nullable<boolean>);
        get msgEditWindowMins(): Nullable<number>;
        set msgEditWindowMins(value: Nullable<number>);
        get whoCanPostGeneral(): Nullable<string>;
        set whoCanPostGeneral(value: Nullable<string>);
    }
    namespace TeamPreferencesListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamPreferencesListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.team.profile {
    class TeamProfileGetResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get profile(): Nullable<work.socialhub.kslack.entity.team.Profiles>;
        set profile(value: Nullable<work.socialhub.kslack.entity.team.Profiles>);
    }
    namespace TeamProfileGetResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamProfileGetResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.usergroups {
    class UsergroupsEnableResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get usergroup(): Nullable<work.socialhub.kslack.entity.user.UserGroup>;
        set usergroup(value: Nullable<work.socialhub.kslack.entity.user.UserGroup>);
    }
    namespace UsergroupsEnableResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsEnableResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.usergroups {
    class UsergroupsListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get usergroups(): Nullable<Array<work.socialhub.kslack.entity.user.UserGroup>>;
        set usergroups(value: Nullable<Array<work.socialhub.kslack.entity.user.UserGroup>>);
    }
    namespace UsergroupsListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.usergroups {
    class UsergroupsUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get usergroup(): Nullable<work.socialhub.kslack.entity.user.UserGroup>;
        set usergroup(value: Nullable<work.socialhub.kslack.entity.user.UserGroup>);
    }
    namespace UsergroupsUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupsUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.usergroups.users {
    class UserGroupUsersUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get usergroup(): Nullable<work.socialhub.kslack.entity.user.UserGroup>;
        set usergroup(value: Nullable<work.socialhub.kslack.entity.user.UserGroup>);
    }
    namespace UserGroupUsersUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserGroupUsersUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.usergroups.users {
    class UsergroupUsersListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
    }
    namespace UsergroupUsersListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsergroupUsersListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersConversationsResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get channels(): Nullable<Array<work.socialhub.kslack.entity.Conversation>>;
        set channels(value: Nullable<Array<work.socialhub.kslack.entity.Conversation>>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace UsersConversationsResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersConversationsResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersDeletePhotoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace UsersDeletePhotoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersDeletePhotoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersDiscoverableContactsLookupResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get user(): Nullable<work.socialhub.kslack.entity.user.User>;
        set user(value: Nullable<work.socialhub.kslack.entity.user.User>);
    }
    namespace UsersDiscoverableContactsLookupResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersDiscoverableContactsLookupResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersGetPresenceResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get presence(): Nullable<string>;
        set presence(value: Nullable<string>);
        get isOnline(): boolean;
        set isOnline(value: boolean);
        get isAutoAway(): boolean;
        set isAutoAway(value: boolean);
        get isManualAway(): boolean;
        set isManualAway(value: boolean);
        get connectionCount(): Nullable<number>;
        set connectionCount(value: Nullable<number>);
        get lastActivity(): Nullable<number>;
        set lastActivity(value: Nullable<number>);
    }
    namespace UsersGetPresenceResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersGetPresenceResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersIdentityResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get user(): Nullable<work.socialhub.kslack.entity.user.User>;
        set user(value: Nullable<work.socialhub.kslack.entity.user.User>);
        get team(): Nullable<work.socialhub.kslack.entity.team.Team>;
        set team(value: Nullable<work.socialhub.kslack.entity.team.Team>);
    }
    namespace UsersIdentityResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersIdentityResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersInfoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get user(): Nullable<work.socialhub.kslack.entity.user.User>;
        set user(value: Nullable<work.socialhub.kslack.entity.user.User>);
    }
    namespace UsersInfoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersInfoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersListResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get offset(): Nullable<string>;
        set offset(value: Nullable<string>);
        get members(): Nullable<Array<work.socialhub.kslack.entity.user.User>>;
        set members(value: Nullable<Array<work.socialhub.kslack.entity.user.User>>);
        get cacheTs(): Nullable<string>;
        set cacheTs(value: Nullable<string>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace UsersListResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersListResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersSetActiveResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace UsersSetActiveResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetActiveResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersSetPhotoResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get profile(): Nullable<work.socialhub.kslack.entity.user.Profile>;
        set profile(value: Nullable<work.socialhub.kslack.entity.user.Profile>);
    }
    namespace UsersSetPhotoResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetPhotoResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users {
    class UsersSetPresenceResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
    }
    namespace UsersSetPresenceResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSetPresenceResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users.profile {
    class UsersProfileGetResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get profile(): Nullable<work.socialhub.kslack.entity.user.Profile>;
        set profile(value: Nullable<work.socialhub.kslack.entity.user.Profile>);
    }
    namespace UsersProfileGetResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersProfileGetResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.users.profile {
    class UsersProfileSetResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get profile(): Nullable<work.socialhub.kslack.entity.user.Profile>;
        set profile(value: Nullable<work.socialhub.kslack.entity.user.Profile>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
    }
    namespace UsersProfileSetResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersProfileSetResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.views {
    class ViewsOpenResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ViewsOpenResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsOpenResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.views {
    class ViewsPublishResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ViewsPublishResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsPublishResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.views {
    class ViewsPushResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ViewsPushResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsPushResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.methods.response.views {
    class ViewsUpdateResponse extends work.socialhub.kslack.api.methods.SlackApiResponse.$metadata$.constructor {
        constructor();
        get view(): Nullable<work.socialhub.kslack.entity.view.View>;
        set view(value: Nullable<work.socialhub.kslack.entity.view.View>);
        get responseMetadata(): Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>;
        set responseMetadata(value: Nullable<work.socialhub.kslack.api.methods.response.entity.ResponseMetadata>);
    }
    namespace ViewsUpdateResponse {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewsUpdateResponse;
        }
    }
}
export declare namespace work.socialhub.kslack.api.status.model {
    class CurrentStatus {
        constructor();
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
        get dateCreated(): Nullable<string>;
        set dateCreated(value: Nullable<string>);
        get dateUpdated(): Nullable<string>;
        set dateUpdated(value: Nullable<string>);
        get activeIncidents(): Nullable<Array<work.socialhub.kslack.api.status.model.SlackIssue>>;
        set activeIncidents(value: Nullable<Array<work.socialhub.kslack.api.status.model.SlackIssue>>);
    }
    namespace CurrentStatus {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CurrentStatus;
        }
    }
}
export declare namespace work.socialhub.kslack.api.status.model {
    class SlackIssue {
        constructor();
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get dateCreated(): Nullable<string>;
        set dateCreated(value: Nullable<string>);
        get dateUpdated(): Nullable<string>;
        set dateUpdated(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get services(): Nullable<Array<string>>;
        set services(value: Nullable<Array<string>>);
        get notes(): Nullable<Array<work.socialhub.kslack.api.status.model.Note>>;
        set notes(value: Nullable<Array<work.socialhub.kslack.api.status.model.Note>>);
    }
    namespace SlackIssue {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SlackIssue;
        }
    }
    class Note {
        constructor();
        get dateCreated(): Nullable<string>;
        set dateCreated(value: Nullable<string>);
        get body(): Nullable<string>;
        set body(value: Nullable<string>);
    }
    namespace Note {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Note;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Action {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get style(): Nullable<string>;
        set style(value: Nullable<string>);
        get type(): Nullable<work.socialhub.kslack.entity.Type>;
        set type(value: Nullable<work.socialhub.kslack.entity.Type>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.Confirmation>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.Confirmation>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.Option>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.Option>>);
        get selectedOptions(): Nullable<Array<work.socialhub.kslack.entity.Option>>;
        set selectedOptions(value: Nullable<Array<work.socialhub.kslack.entity.Option>>);
        get dataSource(): Nullable<string>;
        set dataSource(value: Nullable<string>);
        get minQueryLength(): Nullable<number>;
        set minQueryLength(value: Nullable<number>);
        get optionGroups(): Nullable<Array<work.socialhub.kslack.entity.ActionOptionGroup>>;
        set optionGroups(value: Nullable<Array<work.socialhub.kslack.entity.ActionOptionGroup>>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace Action {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Action;
        }
    }
    abstract class Type {
        private constructor();
        static get BUTTON(): work.socialhub.kslack.entity.Type & {
            get name(): "BUTTON";
            get ordinal(): 0;
        };
        static get SELECT(): work.socialhub.kslack.entity.Type & {
            get name(): "SELECT";
            get ordinal(): 1;
        };
        get name(): "BUTTON" | "SELECT";
        get ordinal(): 0 | 1;
        value(): string;
        static values(): Array<work.socialhub.kslack.entity.Type>;
        static valueOf(value: string): work.socialhub.kslack.entity.Type;
    }
    namespace Type {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Type;
        }
    }
    class ActionOptionGroup {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.ActionOption>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.ActionOption>>);
    }
    namespace ActionOptionGroup {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ActionOptionGroup;
        }
    }
    class ActionOption {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace ActionOption {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ActionOption;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Args {
        constructor();
        get foo(): Nullable<string>;
        set foo(value: Nullable<string>);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
    }
    namespace Args {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Args;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Attachment {
        constructor();
        get msgSubtype(): Nullable<string>;
        set msgSubtype(value: Nullable<string>);
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get callbackId(): Nullable<string>;
        set callbackId(value: Nullable<string>);
        get color(): Nullable<string>;
        set color(value: Nullable<string>);
        get pretext(): Nullable<string>;
        set pretext(value: Nullable<string>);
        get serviceUrl(): Nullable<string>;
        set serviceUrl(value: Nullable<string>);
        get serviceName(): Nullable<string>;
        set serviceName(value: Nullable<string>);
        get serviceIcon(): Nullable<string>;
        set serviceIcon(value: Nullable<string>);
        get authorName(): Nullable<string>;
        set authorName(value: Nullable<string>);
        get authorLink(): Nullable<string>;
        set authorLink(value: Nullable<string>);
        get authorIcon(): Nullable<string>;
        set authorIcon(value: Nullable<string>);
        get fromUrl(): Nullable<string>;
        set fromUrl(value: Nullable<string>);
        get originalUrl(): Nullable<string>;
        set originalUrl(value: Nullable<string>);
        get authorSubname(): Nullable<string>;
        set authorSubname(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get channelName(): Nullable<string>;
        set channelName(value: Nullable<string>);
        get id(): Nullable<number>;
        set id(value: Nullable<number>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get isIndent(): Nullable<boolean>;
        set isIndent(value: Nullable<boolean>);
        get isMsgUnfurl(): Nullable<boolean>;
        set isMsgUnfurl(value: Nullable<boolean>);
        get isReplyUnfurl(): Nullable<boolean>;
        set isReplyUnfurl(value: Nullable<boolean>);
        get isThreadRootUnfurl(): Nullable<boolean>;
        set isThreadRootUnfurl(value: Nullable<boolean>);
        get isAppUnfurl(): Nullable<boolean>;
        set isAppUnfurl(value: Nullable<boolean>);
        get appUnfurlUrl(): Nullable<string>;
        set appUnfurlUrl(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get titleLink(): Nullable<string>;
        set titleLink(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get fields(): Nullable<Array<work.socialhub.kslack.entity.Field>>;
        set fields(value: Nullable<Array<work.socialhub.kslack.entity.Field>>);
        get imageUrl(): Nullable<string>;
        set imageUrl(value: Nullable<string>);
        get imageWidth(): Nullable<number>;
        set imageWidth(value: Nullable<number>);
        get imageHeight(): Nullable<number>;
        set imageHeight(value: Nullable<number>);
        get imageBytes(): Nullable<number>;
        set imageBytes(value: Nullable<number>);
        get thumbUrl(): Nullable<string>;
        set thumbUrl(value: Nullable<string>);
        get thumbWidth(): Nullable<number>;
        set thumbWidth(value: Nullable<number>);
        get thumbHeight(): Nullable<number>;
        set thumbHeight(value: Nullable<number>);
        get videoHtml(): Nullable<string>;
        set videoHtml(value: Nullable<string>);
        get videoHtmlWidth(): Nullable<number>;
        set videoHtmlWidth(value: Nullable<number>);
        get videoHtmlHeight(): Nullable<number>;
        set videoHtmlHeight(value: Nullable<number>);
        get footer(): Nullable<string>;
        set footer(value: Nullable<string>);
        get footerIcon(): Nullable<string>;
        set footerIcon(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get mrkdwnIn(): Nullable<Array<string>>;
        set mrkdwnIn(value: Nullable<Array<string>>);
        get actions(): Nullable<Array<work.socialhub.kslack.entity.Action>>;
        set actions(value: Nullable<Array<work.socialhub.kslack.entity.Action>>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get filename(): Nullable<string>;
        set filename(value: Nullable<string>);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        get mimetype(): Nullable<string>;
        set mimetype(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get metadata(): Nullable<work.socialhub.kslack.entity.AttachmentMetadata>;
        set metadata(value: Nullable<work.socialhub.kslack.entity.AttachmentMetadata>);
    }
    namespace Attachment {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Attachment;
        }
    }
    class AttachmentMetadata {
        constructor();
        get thumb64(): Nullable<boolean>;
        set thumb64(value: Nullable<boolean>);
        get thumb80(): Nullable<boolean>;
        set thumb80(value: Nullable<boolean>);
        get thumb160(): Nullable<boolean>;
        set thumb160(value: Nullable<boolean>);
        get originalWidth(): Nullable<number>;
        set originalWidth(value: Nullable<number>);
        get originalHeight(): Nullable<number>;
        set originalHeight(value: Nullable<number>);
        get thumb360Width(): Nullable<number>;
        set thumb360Width(value: Nullable<number>);
        get thumb360Height(): Nullable<number>;
        set thumb360Height(value: Nullable<number>);
        get format(): Nullable<string>;
        set format(value: Nullable<string>);
        get extension(): Nullable<string>;
        set extension(value: Nullable<string>);
        get rotation(): Nullable<number>;
        set rotation(value: Nullable<number>);
        get thumbTiny(): Nullable<string>;
        set thumbTiny(value: Nullable<string>);
    }
    namespace AttachmentMetadata {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AttachmentMetadata;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class BillableInfo {
        constructor();
        get isBillingActive(): boolean;
        set isBillingActive(value: boolean);
    }
    namespace BillableInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BillableInfo;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Bookmark {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get link(): Nullable<string>;
        set link(value: Nullable<string>);
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
        get iconUrl(): Nullable<string>;
        set iconUrl(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get dateCreated(): Nullable<number>;
        set dateCreated(value: Nullable<number>);
        get dateUpdated(): Nullable<number>;
        set dateUpdated(value: Nullable<number>);
        get rank(): Nullable<string>;
        set rank(value: Nullable<string>);
        get lastUpdatedByUserId(): Nullable<string>;
        set lastUpdatedByUserId(value: Nullable<string>);
        get lastUpdatedByTeamId(): Nullable<string>;
        set lastUpdatedByTeamId(value: Nullable<string>);
    }
    namespace Bookmark {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Bookmark;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class BotProfile {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get isDeleted(): boolean;
        set isDeleted(value: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get updated(): Nullable<number>;
        set updated(value: Nullable<number>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get icons(): Nullable<work.socialhub.kslack.entity.BotProfileIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.BotProfileIcons>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace BotProfile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotProfile;
        }
    }
    class BotProfileIcons {
        constructor();
        get image36(): Nullable<string>;
        set image36(value: Nullable<string>);
        get image48(): Nullable<string>;
        set image48(value: Nullable<string>);
        get image72(): Nullable<string>;
        set image72(value: Nullable<string>);
    }
    namespace BotProfileIcons {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotProfileIcons;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Channel {
        constructor();
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get nameNormalized(): Nullable<string>;
        set nameNormalized(value: Nullable<string>);
        get created(): Nullable<number>;
        set created(value: Nullable<number>);
        get creator(): Nullable<string>;
        set creator(value: Nullable<string>);
        get isReadOnly(): boolean;
        set isReadOnly(value: boolean);
        get isThreadOnly(): boolean;
        set isThreadOnly(value: boolean);
        get isArchived(): boolean;
        set isArchived(value: boolean);
        get isMember(): boolean;
        set isMember(value: boolean);
        get isGeneral(): boolean;
        set isGeneral(value: boolean);
        get isChannel(): boolean;
        set isChannel(value: boolean);
        get isGroup(): boolean;
        set isGroup(value: boolean);
        get isIm(): boolean;
        set isIm(value: boolean);
        get isPrivateChannel(): boolean;
        set isPrivateChannel(value: boolean);
        get isMpim(): boolean;
        set isMpim(value: boolean);
        get isShared(): boolean;
        set isShared(value: boolean);
        get isOrgShared(): boolean;
        set isOrgShared(value: boolean);
        get isGlobalShared(): boolean;
        set isGlobalShared(value: boolean);
        get isOrgDefault(): boolean;
        set isOrgDefault(value: boolean);
        get isOrgMandatory(): boolean;
        set isOrgMandatory(value: boolean);
        get isMoved(): Nullable<number>;
        set isMoved(value: Nullable<number>);
        get isExtShared(): boolean;
        set isExtShared(value: boolean);
        get isPendingExtShared(): boolean;
        set isPendingExtShared(value: boolean);
        get pendingShared(): Nullable<Array<string>>;
        set pendingShared(value: Nullable<Array<string>>);
        get lastRead(): Nullable<string>;
        set lastRead(value: Nullable<string>);
        get latest(): Nullable<work.socialhub.kslack.entity.Latest>;
        set latest(value: Nullable<work.socialhub.kslack.entity.Latest>);
        get unreadCount(): Nullable<number>;
        set unreadCount(value: Nullable<number>);
        get unreadCountDisplay(): Nullable<number>;
        set unreadCountDisplay(value: Nullable<number>);
        get unlinked(): Nullable<number>;
        set unlinked(value: Nullable<number>);
        get members(): Nullable<Array<string>>;
        set members(value: Nullable<Array<string>>);
        get topic(): Nullable<work.socialhub.kslack.entity.Topic>;
        set topic(value: Nullable<work.socialhub.kslack.entity.Topic>);
        get purpose(): Nullable<work.socialhub.kslack.entity.Purpose>;
        set purpose(value: Nullable<work.socialhub.kslack.entity.Purpose>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get previousNames(): Nullable<Array<string>>;
        set previousNames(value: Nullable<Array<string>>);
        get numMembers(): Nullable<number>;
        set numMembers(value: Nullable<number>);
        get priority(): Nullable<number>;
        set priority(value: Nullable<number>);
    }
    namespace Channel {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Channel;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Comment {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get created(): Nullable<number>;
        set created(value: Nullable<number>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get isIntro(): boolean;
        set isIntro(value: boolean);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get numStars(): Nullable<number>;
        set numStars(value: Nullable<number>);
        get isStarred(): boolean;
        set isStarred(value: boolean);
    }
    namespace Comment {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Comment;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Confirmation {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get okText(): Nullable<string>;
        set okText(value: Nullable<string>);
        get dismissText(): Nullable<string>;
        set dismissText(value: Nullable<string>);
    }
    namespace Confirmation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Confirmation;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get OKAY(): string;
                    get DISMISS(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Conversation {
        constructor();
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get created(): Nullable<string>;
        set created(value: Nullable<string>);
        get creator(): Nullable<string>;
        set creator(value: Nullable<string>);
        get unlinked(): Nullable<number>;
        set unlinked(value: Nullable<number>);
        get nameNormalized(): Nullable<string>;
        set nameNormalized(value: Nullable<string>);
        get pendingShared(): Nullable<Array<string>>;
        set pendingShared(value: Nullable<Array<string>>);
        get lastRead(): Nullable<string>;
        set lastRead(value: Nullable<string>);
        get topic(): Nullable<work.socialhub.kslack.entity.Topic>;
        set topic(value: Nullable<work.socialhub.kslack.entity.Topic>);
        get purpose(): Nullable<work.socialhub.kslack.entity.Purpose>;
        set purpose(value: Nullable<work.socialhub.kslack.entity.Purpose>);
        get previousNames(): Nullable<Array<string>>;
        set previousNames(value: Nullable<Array<string>>);
        get numOfMembers(): Nullable<number>;
        set numOfMembers(value: Nullable<number>);
        get members(): Nullable<Array<string>>;
        set members(value: Nullable<Array<string>>);
        get latest(): Nullable<work.socialhub.kslack.entity.Latest>;
        set latest(value: Nullable<work.socialhub.kslack.entity.Latest>);
        get locale(): Nullable<string>;
        set locale(value: Nullable<string>);
        get unreadCount(): Nullable<number>;
        set unreadCount(value: Nullable<number>);
        get unreadCountDisplay(): Nullable<number>;
        set unreadCountDisplay(value: Nullable<number>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get priority(): Nullable<number>;
        set priority(value: Nullable<number>);
        get sharedTeamIds(): Nullable<Array<string>>;
        set sharedTeamIds(value: Nullable<Array<string>>);
        get parentConversation(): Nullable<string>;
        set parentConversation(value: Nullable<string>);
        get pendingConnectedTeamIds(): Nullable<Array<string>>;
        set pendingConnectedTeamIds(value: Nullable<Array<string>>);
        get conversationHostId(): Nullable<string>;
        set conversationHostId(value: Nullable<string>);
        get internalTeamIds(): Nullable<Array<string>>;
        set internalTeamIds(value: Nullable<Array<string>>);
        get connectedTeamIds(): Nullable<Array<string>>;
        set connectedTeamIds(value: Nullable<Array<string>>);
        get isChannel(): boolean;
        set isChannel(value: boolean);
        get isGroup(): boolean;
        set isGroup(value: boolean);
        get isIm(): boolean;
        set isIm(value: boolean);
        get isArchived(): boolean;
        set isArchived(value: boolean);
        get isGeneral(): boolean;
        set isGeneral(value: boolean);
        get isReadOnly(): boolean;
        set isReadOnly(value: boolean);
        get isThreadOnly(): boolean;
        set isThreadOnly(value: boolean);
        get isNonThreadable(): boolean;
        set isNonThreadable(value: boolean);
        get isShared(): boolean;
        set isShared(value: boolean);
        get isExtShared(): boolean;
        set isExtShared(value: boolean);
        get isOrgShared(): boolean;
        set isOrgShared(value: boolean);
        get isPendingExtShared(): boolean;
        set isPendingExtShared(value: boolean);
        get isGlobalShared(): boolean;
        set isGlobalShared(value: boolean);
        get isOrgDefault(): boolean;
        set isOrgDefault(value: boolean);
        get isOrgMandatory(): boolean;
        set isOrgMandatory(value: boolean);
        get isMoved(): Nullable<number>;
        set isMoved(value: Nullable<number>);
        get isMember(): boolean;
        set isMember(value: boolean);
        get isOpen(): boolean;
        set isOpen(value: boolean);
        get isPrivate(): boolean;
        set isPrivate(value: boolean);
        get isMpim(): boolean;
        set isMpim(value: boolean);
    }
    namespace Conversation {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Conversation;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    abstract class ConversationType {
        private constructor();
        static get PUBLIC_CHANNEL(): work.socialhub.kslack.entity.ConversationType & {
            get name(): "PUBLIC_CHANNEL";
            get ordinal(): 0;
        };
        static get PRIVATE_CHANNEL(): work.socialhub.kslack.entity.ConversationType & {
            get name(): "PRIVATE_CHANNEL";
            get ordinal(): 1;
        };
        static get MPIM(): work.socialhub.kslack.entity.ConversationType & {
            get name(): "MPIM";
            get ordinal(): 2;
        };
        static get IM(): work.socialhub.kslack.entity.ConversationType & {
            get name(): "IM";
            get ordinal(): 3;
        };
        get name(): "PUBLIC_CHANNEL" | "PRIVATE_CHANNEL" | "MPIM" | "IM";
        get ordinal(): 0 | 1 | 2 | 3;
        get value(): string;
        static values(): Array<work.socialhub.kslack.entity.ConversationType>;
        static valueOf(value: string): work.socialhub.kslack.entity.ConversationType;
    }
    namespace ConversationType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationType;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Edited {
        constructor();
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace Edited {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Edited;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Error {
        constructor();
        get isOk(): boolean;
        set isOk(value: boolean);
        get error(): Nullable<string>;
        set error(value: Nullable<string>);
    }
    namespace Error {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Error;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Field {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get isValueShortEnough(): boolean;
        set isValueShortEnough(value: boolean);
    }
    namespace Field {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Field;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class IntegrationLog {
        constructor();
        get appType(): Nullable<string>;
        set appType(value: Nullable<string>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get serviceId(): Nullable<string>;
        set serviceId(value: Nullable<string>);
        get serviceType(): Nullable<string>;
        set serviceType(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get userName(): Nullable<string>;
        set userName(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get date(): Nullable<number>;
        set date(value: Nullable<number>);
        get changeType(): Nullable<string>;
        set changeType(value: Nullable<string>);
        get resolution(): Nullable<string>;
        set resolution(value: Nullable<string>);
        get reason(): Nullable<string>;
        set reason(value: Nullable<string>);
        get scope(): Nullable<string>;
        set scope(value: Nullable<string>);
        get isRssFeed(): boolean;
        set isRssFeed(value: boolean);
        get rssFeedChangeType(): Nullable<string>;
        set rssFeedChangeType(value: Nullable<string>);
        get rssFeedTitle(): Nullable<string>;
        set rssFeedTitle(value: Nullable<string>);
        get rssFeedUrl(): Nullable<string>;
        set rssFeedUrl(value: Nullable<string>);
    }
    namespace IntegrationLog {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => IntegrationLog;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Item {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get message(): Nullable<work.socialhub.kslack.entity.message.Message>;
        set message(value: Nullable<work.socialhub.kslack.entity.message.Message>);
        get dateCreate(): Nullable<number>;
        set dateCreate(value: Nullable<number>);
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
        get comment(): Nullable<work.socialhub.kslack.entity.Comment>;
        set comment(value: Nullable<work.socialhub.kslack.entity.Comment>);
    }
    namespace Item {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Item;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Latest {
        constructor();
        get clientMsgId(): Nullable<string>;
        set clientMsgId(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get subtype(): Nullable<string>;
        set subtype(value: Nullable<string>);
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get parentUserId(): Nullable<string>;
        set parentUserId(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get topic(): Nullable<string>;
        set topic(value: Nullable<string>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get files(): Nullable<Array<work.socialhub.kslack.entity.file.File>>;
        set files(value: Nullable<Array<work.socialhub.kslack.entity.file.File>>);
        get reactions(): Nullable<Array<work.socialhub.kslack.entity.Reaction>>;
        set reactions(value: Nullable<Array<work.socialhub.kslack.entity.Reaction>>);
        get root(): Nullable<work.socialhub.kslack.entity.message.MessageRoot>;
        set root(value: Nullable<work.socialhub.kslack.entity.message.MessageRoot>);
        get isUpload(): boolean;
        set isUpload(value: boolean);
        get isDisplayAsBot(): boolean;
        set isDisplayAsBot(value: boolean);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get botLink(): Nullable<string>;
        set botLink(value: Nullable<string>);
        get botProfile(): Nullable<work.socialhub.kslack.entity.bot.BotProfile>;
        set botProfile(value: Nullable<work.socialhub.kslack.entity.bot.BotProfile>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get icons(): Nullable<work.socialhub.kslack.entity.message.MessageIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.message.MessageIcons>);
        get xFiles(): Nullable<Array<string>>;
        set xFiles(value: Nullable<Array<string>>);
        get edited(): Nullable<work.socialhub.kslack.entity.Edited>;
        set edited(value: Nullable<work.socialhub.kslack.entity.Edited>);
    }
    namespace Latest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Latest;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Login {
        constructor();
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get dateFirst(): Nullable<number>;
        set dateFirst(value: Nullable<number>);
        get dateLast(): Nullable<number>;
        set dateLast(value: Nullable<number>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get ip(): Nullable<string>;
        set ip(value: Nullable<string>);
        get userAgent(): Nullable<string>;
        set userAgent(value: Nullable<string>);
        get isp(): Nullable<string>;
        set isp(value: Nullable<string>);
        get country(): Nullable<string>;
        set country(value: Nullable<string>);
        get region(): Nullable<string>;
        set region(value: Nullable<string>);
    }
    namespace Login {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Login;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Option {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace Option {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Option;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Paging {
        constructor();
        get iid(): Nullable<string>;
        set iid(value: Nullable<string>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get total(): Nullable<number>;
        set total(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
        get pages(): Nullable<number>;
        set pages(value: Nullable<number>);
        get perPage(): Nullable<number>;
        set perPage(value: Nullable<number>);
        get spill(): Nullable<number>;
        set spill(value: Nullable<number>);
    }
    namespace Paging {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Paging;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Purpose {
        constructor();
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get creator(): Nullable<string>;
        set creator(value: Nullable<string>);
        get lastSet(): Nullable<number>;
        set lastSet(value: Nullable<number>);
    }
    namespace Purpose {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Purpose;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Reaction {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
    }
    namespace Reaction {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Reaction;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Reminder {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get creator(): Nullable<string>;
        set creator(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get isRecurring(): boolean;
        set isRecurring(value: boolean);
        get time(): Nullable<number>;
        set time(value: Nullable<number>);
        get completeTs(): Nullable<number>;
        set completeTs(value: Nullable<number>);
    }
    namespace Reminder {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Reminder;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Resource {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get scopes(): Nullable<Array<string>>;
        set scopes(value: Nullable<Array<string>>);
    }
    namespace Resource {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Resource;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class ResponseMetadata {
        constructor();
        get nextCursor(): Nullable<string>;
        set nextCursor(value: Nullable<string>);
        get messages(): Nullable<Array<string>>;
        set messages(value: Nullable<Array<string>>);
        get warnings(): Nullable<Array<string>>;
        set warnings(value: Nullable<Array<string>>);
    }
    namespace ResponseMetadata {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ResponseMetadata;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Scope {
        constructor();
        get appHome(): Nullable<Array<string>>;
        set appHome(value: Nullable<Array<string>>);
        get team(): Nullable<Array<string>>;
        set team(value: Nullable<Array<string>>);
        get channel(): Nullable<Array<string>>;
        set channel(value: Nullable<Array<string>>);
        get group(): Nullable<Array<string>>;
        set group(value: Nullable<Array<string>>);
        get mpim(): Nullable<Array<string>>;
        set mpim(value: Nullable<Array<string>>);
        get im(): Nullable<Array<string>>;
        set im(value: Nullable<Array<string>>);
        get user(): Nullable<Array<string>>;
        set user(value: Nullable<Array<string>>);
    }
    namespace Scope {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Scope;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class ThreadInfo {
        constructor();
        get isComplete(): boolean;
        set isComplete(value: boolean);
        get count(): Nullable<number>;
        set count(value: Nullable<number>);
    }
    namespace ThreadInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ThreadInfo;
        }
    }
}
export declare namespace work.socialhub.kslack.entity {
    class Topic {
        constructor();
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get creator(): Nullable<string>;
        set creator(value: Nullable<string>);
        get lastSet(): Nullable<number>;
        set lastSet(value: Nullable<number>);
    }
    namespace Topic {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Topic;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class App {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get helpUrl(): Nullable<string>;
        set helpUrl(value: Nullable<string>);
        get privacyPolicyUrl(): Nullable<string>;
        set privacyPolicyUrl(value: Nullable<string>);
        get appHomepageUrl(): Nullable<string>;
        set appHomepageUrl(value: Nullable<string>);
        get appDirectoryUrl(): Nullable<string>;
        set appDirectoryUrl(value: Nullable<string>);
        get isAppDirectoryApproved(): boolean;
        set isAppDirectoryApproved(value: boolean);
        get isInternal(): boolean;
        set isInternal(value: boolean);
        get additionalInfo(): Nullable<string>;
        set additionalInfo(value: Nullable<string>);
        get icons(): Nullable<work.socialhub.kslack.entity.admin.AppIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.admin.AppIcons>);
    }
    namespace App {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => App;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class AppIcons {
        constructor();
        get image32(): Nullable<string>;
        set image32(value: Nullable<string>);
        get image36(): Nullable<string>;
        set image36(value: Nullable<string>);
        get image48(): Nullable<string>;
        set image48(value: Nullable<string>);
        get image64(): Nullable<string>;
        set image64(value: Nullable<string>);
        get image72(): Nullable<string>;
        set image72(value: Nullable<string>);
        get image96(): Nullable<string>;
        set image96(value: Nullable<string>);
        get image128(): Nullable<string>;
        set image128(value: Nullable<string>);
        get image192(): Nullable<string>;
        set image192(value: Nullable<string>);
        get image512(): Nullable<string>;
        set image512(value: Nullable<string>);
        get image1024(): Nullable<string>;
        set image1024(value: Nullable<string>);
        get imageOriginal(): Nullable<string>;
        set imageOriginal(value: Nullable<string>);
    }
    namespace AppIcons {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppIcons;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class AppRequest {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get app(): Nullable<work.socialhub.kslack.entity.admin.App>;
        set app(value: Nullable<work.socialhub.kslack.entity.admin.App>);
        get user(): Nullable<work.socialhub.kslack.entity.admin.User>;
        set user(value: Nullable<work.socialhub.kslack.entity.admin.User>);
        get team(): Nullable<work.socialhub.kslack.entity.admin.Team>;
        set team(value: Nullable<work.socialhub.kslack.entity.admin.Team>);
        get scopes(): Nullable<Array<work.socialhub.kslack.entity.admin.Scope>>;
        set scopes(value: Nullable<Array<work.socialhub.kslack.entity.admin.Scope>>);
        get previousResolution(): Nullable<work.socialhub.kslack.entity.admin.PreviousResolution>;
        set previousResolution(value: Nullable<work.socialhub.kslack.entity.admin.PreviousResolution>);
        get isUserAppCollaborator(): Nullable<boolean>;
        set isUserAppCollaborator(value: Nullable<boolean>);
        get message(): Nullable<string>;
        set message(value: Nullable<string>);
        get dateCreated(): Nullable<number>;
        set dateCreated(value: Nullable<number>);
    }
    namespace AppRequest {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => AppRequest;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class PreviousResolution {
        constructor();
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
        get scopes(): Nullable<Array<work.socialhub.kslack.entity.admin.Scope>>;
        set scopes(value: Nullable<Array<work.socialhub.kslack.entity.admin.Scope>>);
    }
    namespace PreviousResolution {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PreviousResolution;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class Scope {
        constructor();
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get isSensitive(): boolean;
        set isSensitive(value: boolean);
        get tokenType(): Nullable<string>;
        set tokenType(value: Nullable<string>);
    }
    namespace Scope {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Scope;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class Team {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get domain(): Nullable<string>;
        set domain(value: Nullable<string>);
    }
    namespace Team {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Team;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.admin {
    class User {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
    }
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block {
    interface LayoutBlock {
        readonly type: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.entity.block.LayoutBlock": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.entity.block.composition {
    class ConfirmationDialogObject {
        constructor();
    }
    namespace ConfirmationDialogObject {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConfirmationDialogObject;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.composition {
    class OptionGroupObject {
        constructor();
        get label(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set label(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
    }
    namespace OptionGroupObject {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OptionGroupObject;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.composition {
    class OptionObject {
        constructor();
        get text(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set text(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace OptionObject {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OptionObject;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.composition {
    class PlainTextObject extends work.socialhub.kslack.entity.block.composition.TextObject.$metadata$.constructor {
        constructor();
        get type(): string;
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get emoji(): Nullable<boolean>;
        set emoji(value: Nullable<boolean>);
    }
    namespace PlainTextObject {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PlainTextObject;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.composition {
    abstract class TextObject /* implements work.socialhub.kslack.entity.block.ContextBlockElement */ {
        constructor();
    }
    namespace TextObject {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TextObject;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class ButtonElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get text(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set text(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get style(): Nullable<string>;
        set style(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace ButtonElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ButtonElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class ChannelsSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialChannel(): Nullable<string>;
        set initialChannel(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace ChannelsSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ChannelsSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class ConversationsSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialConversation(): Nullable<string>;
        set initialConversation(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace ConversationsSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ConversationsSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class DatePickerElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get initialDate(): Nullable<string>;
        set initialDate(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace DatePickerElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DatePickerElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class ExternalSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialOption(): Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>;
        set initialOption(value: Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>);
        get minQueryLength(): Nullable<number>;
        set minQueryLength(value: Nullable<number>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace ExternalSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ExternalSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class ImageElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ /* implements work.socialhub.kslack.entity.block.ContextBlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get imageUrl(): Nullable<string>;
        set imageUrl(value: Nullable<string>);
        get imageWidth(): Nullable<number>;
        set imageWidth(value: Nullable<number>);
        get imageHeight(): Nullable<number>;
        set imageHeight(value: Nullable<number>);
        get imageBytes(): Nullable<number>;
        set imageBytes(value: Nullable<number>);
        get altText(): Nullable<string>;
        set altText(value: Nullable<string>);
    }
    namespace ImageElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ImageElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class MultiChannelsSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialChannels(): Nullable<Array<string>>;
        set initialChannels(value: Nullable<Array<string>>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
        get maxSelectedItems(): Nullable<number>;
        set maxSelectedItems(value: Nullable<number>);
    }
    namespace MultiChannelsSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MultiChannelsSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class MultiConversationsSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialConversations(): Nullable<Array<string>>;
        set initialConversations(value: Nullable<Array<string>>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
        get maxSelectedItems(): Nullable<number>;
        set maxSelectedItems(value: Nullable<number>);
    }
    namespace MultiConversationsSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MultiConversationsSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class MultiExternalSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get minQueryLength(): Nullable<number>;
        set minQueryLength(value: Nullable<number>);
        get maxSelectedItems(): Nullable<number>;
        set maxSelectedItems(value: Nullable<number>);
    }
    namespace MultiExternalSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MultiExternalSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class MultiStaticSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
        get optionGroups(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionGroupObject>>;
        set optionGroups(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionGroupObject>>);
        get initialOptions(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set initialOptions(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
        get maxSelectedItems(): Nullable<number>;
        set maxSelectedItems(value: Nullable<number>);
    }
    namespace MultiStaticSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MultiStaticSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class MultiUsersSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialUsers(): Nullable<Array<string>>;
        set initialUsers(value: Nullable<Array<string>>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
        get maxSelectedItems(): Nullable<number>;
        set maxSelectedItems(value: Nullable<number>);
    }
    namespace MultiUsersSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MultiUsersSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class OverflowMenuElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace OverflowMenuElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OverflowMenuElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class PlainTextInputElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get initialValue(): Nullable<string>;
        set initialValue(value: Nullable<string>);
        get isMultiline(): boolean;
        set isMultiline(value: boolean);
        get minLength(): Nullable<number>;
        set minLength(value: Nullable<number>);
        get maxLength(): Nullable<number>;
        set maxLength(value: Nullable<number>);
    }
    namespace PlainTextInputElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => PlainTextInputElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class RadioButtonsElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
        get initialOption(): Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>;
        set initialOption(value: Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace RadioButtonsElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RadioButtonsElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    interface RichTextElement {
        readonly type: Nullable<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.entity.block.element.RichTextElement": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class RichTextListElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ implements work.socialhub.kslack.entity.block.element.RichTextElement {
        constructor();
        get type(): string;
        get elements(): Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>;
        set elements(value: Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>);
        get style(): Nullable<string>;
        set style(value: Nullable<string>);
        get indent(): Nullable<number>;
        set indent(value: Nullable<number>);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.block.element.RichTextElement["__doNotUseOrImplementIt"];
    }
    namespace RichTextListElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RichTextListElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class RichTextPreformattedElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ implements work.socialhub.kslack.entity.block.element.RichTextElement {
        constructor();
        get type(): string;
        get elements(): Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>;
        set elements(value: Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.block.element.RichTextElement["__doNotUseOrImplementIt"];
    }
    namespace RichTextPreformattedElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RichTextPreformattedElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class RichTextQuoteElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ implements work.socialhub.kslack.entity.block.element.RichTextElement {
        constructor();
        get type(): string;
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.block.element.RichTextElement["__doNotUseOrImplementIt"];
    }
    namespace RichTextQuoteElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RichTextQuoteElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class RichTextSectionElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ implements work.socialhub.kslack.entity.block.element.RichTextElement {
        constructor();
        get type(): string;
        get elements(): Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>;
        set elements(value: Nullable<Array<work.socialhub.kslack.entity.block.element.RichTextElement>>);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.block.element.RichTextElement["__doNotUseOrImplementIt"];
    }
    namespace RichTextSectionElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => RichTextSectionElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class StaticSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get options(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>;
        set options(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionObject>>);
        get optionGroups(): Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionGroupObject>>;
        set optionGroups(value: Nullable<Array<work.socialhub.kslack.entity.block.composition.OptionGroupObject>>);
        get initialOption(): Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>;
        set initialOption(value: Nullable<work.socialhub.kslack.entity.block.composition.OptionObject>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace StaticSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StaticSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.block.element {
    class UsersSelectElement /* extends work.socialhub.kslack.entity.block.element.BlockElement */ {
        constructor();
        get type(): string;
        get fallback(): Nullable<string>;
        set fallback(value: Nullable<string>);
        get placeholder(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set placeholder(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get actionId(): Nullable<string>;
        set actionId(value: Nullable<string>);
        get initialUser(): Nullable<string>;
        set initialUser(value: Nullable<string>);
        get confirm(): Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>;
        set confirm(value: Nullable<work.socialhub.kslack.entity.block.composition.ConfirmationDialogObject>);
    }
    namespace UsersSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UsersSelectElement;
        }
        abstract class Companion extends KtSingleton<Companion.$metadata$.constructor>() {
            private constructor();
        }
        namespace Companion {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                abstract class constructor {
                    get TYPE(): string;
                    private constructor();
                }
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.bot {
    class Bot {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get userId(): Nullable<string>;
        set userId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get isDeleted(): boolean;
        set isDeleted(value: boolean);
        get updated(): Nullable<number>;
        set updated(value: Nullable<number>);
        get icons(): Nullable<work.socialhub.kslack.entity.bot.BotIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.bot.BotIcons>);
    }
    namespace Bot {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Bot;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.bot {
    class BotIcons {
        constructor();
        get image36(): Nullable<string>;
        set image36(value: Nullable<string>);
        get image48(): Nullable<string>;
        set image48(value: Nullable<string>);
        get image72(): Nullable<string>;
        set image72(value: Nullable<string>);
    }
    namespace BotIcons {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotIcons;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.bot {
    class BotProfile {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get isDeleted(): boolean;
        set isDeleted(value: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get updated(): Nullable<number>;
        set updated(value: Nullable<number>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get icons(): Nullable<work.socialhub.kslack.entity.bot.BotIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.bot.BotIcons>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace BotProfile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => BotProfile;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.call {
    class Call {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get dateCreated(): Nullable<number>;
        set dateCreated(value: Nullable<number>);
        get externalUniqueId(): Nullable<string>;
        set externalUniqueId(value: Nullable<string>);
        get joinUrl(): Nullable<string>;
        set joinUrl(value: Nullable<string>);
        get desktopAppJoinUrl(): Nullable<string>;
        set desktopAppJoinUrl(value: Nullable<string>);
        get externalDisplayId(): Nullable<string>;
        set externalDisplayId(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get users(): Nullable<Array<work.socialhub.kslack.entity.call.CallParticipant>>;
        set users(value: Nullable<Array<work.socialhub.kslack.entity.call.CallParticipant>>);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
    }
    namespace Call {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Call;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.call {
    class CallParticipant {
        constructor();
        get slackId(): Nullable<string>;
        set slackId(value: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get displayName(): Nullable<string>;
        set displayName(value: Nullable<string>);
        get avatarUrl(): Nullable<string>;
        set avatarUrl(value: Nullable<string>);
    }
    namespace CallParticipant {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => CallParticipant;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.connect {
    class SharedInvite {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get direction(): Nullable<string>;
        set direction(value: Nullable<string>);
        get dateCreated(): Nullable<number>;
        set dateCreated(value: Nullable<number>);
        get dateInvalid(): Nullable<number>;
        set dateInvalid(value: Nullable<number>);
        get inviteType(): Nullable<string>;
        set inviteType(value: Nullable<string>);
        get status(): Nullable<string>;
        set status(value: Nullable<string>);
        get channel(): Nullable<work.socialhub.kslack.entity.connect.SharedInviteChannel>;
        set channel(value: Nullable<work.socialhub.kslack.entity.connect.SharedInviteChannel>);
        get invitePayload(): Nullable<work.socialhub.kslack.entity.connect.SharedInvitePayload>;
        set invitePayload(value: Nullable<work.socialhub.kslack.entity.connect.SharedInvitePayload>);
    }
    namespace SharedInvite {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SharedInvite;
        }
    }
    class SharedInviteChannel {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get isPrivate(): Nullable<boolean>;
        set isPrivate(value: Nullable<boolean>);
    }
    namespace SharedInviteChannel {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SharedInviteChannel;
        }
    }
    class SharedInvitePayload {
        constructor();
        get recipientUserId(): Nullable<string>;
        set recipientUserId(value: Nullable<string>);
        get recipientEmail(): Nullable<string>;
        set recipientEmail(value: Nullable<string>);
    }
    namespace SharedInvitePayload {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SharedInvitePayload;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class Dialog {
        constructor();
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get callbackId(): Nullable<string>;
        set callbackId(value: Nullable<string>);
        get elements(): Nullable<Array<work.socialhub.kslack.entity.dialog.DialogElement>>;
        set elements(value: Nullable<Array<work.socialhub.kslack.entity.dialog.DialogElement>>);
        get submitLabel(): Nullable<string>;
        set submitLabel(value: Nullable<string>);
        get isNotifyOnCancel(): boolean;
        set isNotifyOnCancel(value: boolean);
        get state(): Nullable<string>;
        set state(value: Nullable<string>);
    }
    namespace Dialog {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Dialog;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    interface DialogElement {
        label: Nullable<string>;
        name: Nullable<string>;
        readonly type: Nullable<string>;
        value: Nullable<string>;
        placeholder: Nullable<string>;
        isOptional: boolean;
        readonly __doNotUseOrImplementIt: {
            readonly "work.socialhub.kslack.entity.dialog.DialogElement": unique symbol;
        };
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class DialogOption {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace DialogOption {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogOption;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class DialogResponseMetadata {
        constructor();
        get messages(): Nullable<Array<string>>;
        set messages(value: Nullable<Array<string>>);
    }
    namespace DialogResponseMetadata {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogResponseMetadata;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class DialogSelectElement implements work.socialhub.kslack.entity.dialog.DialogElement {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get type(): string;
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get isOptional(): boolean;
        set isOptional(value: boolean);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.dialog.DialogElement["__doNotUseOrImplementIt"];
    }
    namespace DialogSelectElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogSelectElement;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    abstract class DialogSubType {
        private constructor();
        static get EMAIL(): work.socialhub.kslack.entity.dialog.DialogSubType & {
            get name(): "EMAIL";
            get ordinal(): 0;
        };
        static get NUMBER(): work.socialhub.kslack.entity.dialog.DialogSubType & {
            get name(): "NUMBER";
            get ordinal(): 1;
        };
        static get TEL(): work.socialhub.kslack.entity.dialog.DialogSubType & {
            get name(): "TEL";
            get ordinal(): 2;
        };
        static get URL(): work.socialhub.kslack.entity.dialog.DialogSubType & {
            get name(): "URL";
            get ordinal(): 3;
        };
        get name(): "EMAIL" | "NUMBER" | "TEL" | "URL";
        get ordinal(): 0 | 1 | 2 | 3;
        value(): string;
        static values(): Array<work.socialhub.kslack.entity.dialog.DialogSubType>;
        static valueOf(value: string): work.socialhub.kslack.entity.dialog.DialogSubType;
    }
    namespace DialogSubType {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogSubType;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class DialogTextAreaElement implements work.socialhub.kslack.entity.dialog.DialogElement {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get type(): string;
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get isOptional(): boolean;
        set isOptional(value: boolean);
        get maxLength(): number;
        set maxLength(value: number);
        get minLength(): number;
        set minLength(value: number);
        get hint(): Nullable<string>;
        set hint(value: Nullable<string>);
        get subtype(): Nullable<work.socialhub.kslack.entity.dialog.DialogSubType>;
        set subtype(value: Nullable<work.socialhub.kslack.entity.dialog.DialogSubType>);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.dialog.DialogElement["__doNotUseOrImplementIt"];
    }
    namespace DialogTextAreaElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogTextAreaElement;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dialog {
    class DialogTextElement implements work.socialhub.kslack.entity.dialog.DialogElement {
        constructor();
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get type(): string;
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get placeholder(): Nullable<string>;
        set placeholder(value: Nullable<string>);
        get isOptional(): boolean;
        set isOptional(value: boolean);
        get maxLength(): number;
        set maxLength(value: number);
        get minLength(): number;
        set minLength(value: number);
        get hint(): Nullable<string>;
        set hint(value: Nullable<string>);
        get subtype(): Nullable<work.socialhub.kslack.entity.dialog.DialogSubType>;
        set subtype(value: Nullable<work.socialhub.kslack.entity.dialog.DialogSubType>);
        readonly __doNotUseOrImplementIt: work.socialhub.kslack.entity.dialog.DialogElement["__doNotUseOrImplementIt"];
    }
    namespace DialogTextElement {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DialogTextElement;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.dnd {
    class DndTeamMemberInfo {
        constructor();
        get isDndEnabled(): boolean;
        set isDndEnabled(value: boolean);
        get nextDndStartTs(): Nullable<number>;
        set nextDndStartTs(value: Nullable<number>);
        get nextDndEndTs(): Nullable<number>;
        set nextDndEndTs(value: Nullable<number>);
    }
    namespace DndTeamMemberInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => DndTeamMemberInfo;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class File {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get created(): Nullable<number>;
        set created(value: Nullable<number>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get subject(): Nullable<string>;
        set subject(value: Nullable<string>);
        get mimetype(): Nullable<string>;
        set mimetype(value: Nullable<string>);
        get filetype(): Nullable<string>;
        set filetype(value: Nullable<string>);
        get prettyType(): Nullable<string>;
        set prettyType(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get mode(): Nullable<string>;
        set mode(value: Nullable<string>);
        get isEditable(): boolean;
        set isEditable(value: boolean);
        get isExternal(): boolean;
        set isExternal(value: boolean);
        get externalType(): Nullable<string>;
        set externalType(value: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get externalUrl(): Nullable<string>;
        set externalUrl(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        get urlPrivate(): Nullable<string>;
        set urlPrivate(value: Nullable<string>);
        get urlPrivateDownload(): Nullable<string>;
        set urlPrivateDownload(value: Nullable<string>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get appName(): Nullable<string>;
        set appName(value: Nullable<string>);
        get thumb64(): Nullable<string>;
        set thumb64(value: Nullable<string>);
        get thumb64Gif(): Nullable<string>;
        set thumb64Gif(value: Nullable<string>);
        get thumb64Width(): Nullable<string>;
        set thumb64Width(value: Nullable<string>);
        get thumb64Height(): Nullable<string>;
        set thumb64Height(value: Nullable<string>);
        get thumb80(): Nullable<string>;
        set thumb80(value: Nullable<string>);
        get thumb80Gif(): Nullable<string>;
        set thumb80Gif(value: Nullable<string>);
        get thumb80Width(): Nullable<string>;
        set thumb80Width(value: Nullable<string>);
        get thumb80Height(): Nullable<string>;
        set thumb80Height(value: Nullable<string>);
        get thumb160(): Nullable<string>;
        set thumb160(value: Nullable<string>);
        get thumb160Gif(): Nullable<string>;
        set thumb160Gif(value: Nullable<string>);
        get thumb160Width(): Nullable<string>;
        set thumb160Width(value: Nullable<string>);
        get thumb160Height(): Nullable<string>;
        set thumb160Height(value: Nullable<string>);
        get thumb360(): Nullable<string>;
        set thumb360(value: Nullable<string>);
        get thumb360Gif(): Nullable<string>;
        set thumb360Gif(value: Nullable<string>);
        get thumb360Width(): Nullable<string>;
        set thumb360Width(value: Nullable<string>);
        get thumb360Height(): Nullable<string>;
        set thumb360Height(value: Nullable<string>);
        get thumb480(): Nullable<string>;
        set thumb480(value: Nullable<string>);
        get thumb480Gif(): Nullable<string>;
        set thumb480Gif(value: Nullable<string>);
        get thumb480Width(): Nullable<string>;
        set thumb480Width(value: Nullable<string>);
        get thumb480Height(): Nullable<string>;
        set thumb480Height(value: Nullable<string>);
        get thumb720(): Nullable<string>;
        set thumb720(value: Nullable<string>);
        get thumb720Gif(): Nullable<string>;
        set thumb720Gif(value: Nullable<string>);
        get thumb720Width(): Nullable<string>;
        set thumb720Width(value: Nullable<string>);
        get thumb720Height(): Nullable<string>;
        set thumb720Height(value: Nullable<string>);
        get thumb800(): Nullable<string>;
        set thumb800(value: Nullable<string>);
        get thumb800Gif(): Nullable<string>;
        set thumb800Gif(value: Nullable<string>);
        get thumb800Width(): Nullable<string>;
        set thumb800Width(value: Nullable<string>);
        get thumb800Height(): Nullable<string>;
        set thumb800Height(value: Nullable<string>);
        get thumb960(): Nullable<string>;
        set thumb960(value: Nullable<string>);
        get thumb960Gif(): Nullable<string>;
        set thumb960Gif(value: Nullable<string>);
        get thumb960Width(): Nullable<string>;
        set thumb960Width(value: Nullable<string>);
        get thumb960Height(): Nullable<string>;
        set thumb960Height(value: Nullable<string>);
        get thumb1024(): Nullable<string>;
        set thumb1024(value: Nullable<string>);
        get thumb1024Gif(): Nullable<string>;
        set thumb1024Gif(value: Nullable<string>);
        get thumb1024Width(): Nullable<string>;
        set thumb1024Width(value: Nullable<string>);
        get thumb1024Height(): Nullable<string>;
        set thumb1024Height(value: Nullable<string>);
        get thumbVideo(): Nullable<string>;
        set thumbVideo(value: Nullable<string>);
        get thumbPdf(): Nullable<string>;
        set thumbPdf(value: Nullable<string>);
        get thumbPdfWidth(): Nullable<string>;
        set thumbPdfWidth(value: Nullable<string>);
        get thumbPdfHeight(): Nullable<string>;
        set thumbPdfHeight(value: Nullable<string>);
        get thumbTiny(): Nullable<string>;
        set thumbTiny(value: Nullable<string>);
        get convertedPdf(): Nullable<string>;
        set convertedPdf(value: Nullable<string>);
        get imageExifRotation(): Nullable<number>;
        set imageExifRotation(value: Nullable<number>);
        get originalWidth(): Nullable<string>;
        set originalWidth(value: Nullable<string>);
        get originalHeight(): Nullable<string>;
        set originalHeight(value: Nullable<string>);
        get deanimateGif(): Nullable<string>;
        set deanimateGif(value: Nullable<string>);
        get pjpeg(): Nullable<string>;
        set pjpeg(value: Nullable<string>);
        get permalink(): Nullable<string>;
        set permalink(value: Nullable<string>);
        get permalinkPublic(): Nullable<string>;
        set permalinkPublic(value: Nullable<string>);
        get editLink(): Nullable<string>;
        set editLink(value: Nullable<string>);
        get isHasRichPreview(): boolean;
        set isHasRichPreview(value: boolean);
        get isPreviewTruncated(): boolean;
        set isPreviewTruncated(value: boolean);
        get preview(): Nullable<string>;
        set preview(value: Nullable<string>);
        get previewHighlight(): Nullable<string>;
        set previewHighlight(value: Nullable<string>);
        get plainText(): Nullable<string>;
        set plainText(value: Nullable<string>);
        get previewPlainText(): Nullable<string>;
        set previewPlainText(value: Nullable<string>);
        get isHasMore(): boolean;
        set isHasMore(value: boolean);
        get isSentToSelf(): boolean;
        set isSentToSelf(value: boolean);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get lines(): Nullable<number>;
        set lines(value: Nullable<number>);
        get linesMore(): Nullable<number>;
        set linesMore(value: Nullable<number>);
        get isPublic(): boolean;
        set isPublic(value: boolean);
        get isPublicUrlShared(): boolean;
        set isPublicUrlShared(value: boolean);
        get isDisplayAsBot(): boolean;
        set isDisplayAsBot(value: boolean);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
        get groups(): Nullable<Array<string>>;
        set groups(value: Nullable<Array<string>>);
        get ims(): Nullable<Array<string>>;
        set ims(value: Nullable<Array<string>>);
        get initialComment(): Nullable<work.socialhub.kslack.entity.file.FileComment>;
        set initialComment(value: Nullable<work.socialhub.kslack.entity.file.FileComment>);
        get numStars(): Nullable<number>;
        set numStars(value: Nullable<number>);
        get isStarred(): boolean;
        set isStarred(value: boolean);
        get pinnedTo(): Nullable<Array<string>>;
        set pinnedTo(value: Nullable<Array<string>>);
        get reactions(): Nullable<Array<work.socialhub.kslack.entity.Reaction>>;
        set reactions(value: Nullable<Array<work.socialhub.kslack.entity.Reaction>>);
        get commentsCount(): Nullable<number>;
        set commentsCount(value: Nullable<number>);
        get channelActionsTs(): Nullable<string>;
        set channelActionsTs(value: Nullable<string>);
        get channelActionsCount(): Nullable<number>;
        set channelActionsCount(value: Nullable<number>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get shares(): Nullable<work.socialhub.kslack.entity.file.FileShares>;
        set shares(value: Nullable<work.socialhub.kslack.entity.file.FileShares>);
        get to(): Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>;
        set to(value: Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>);
        get from(): Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>;
        set from(value: Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>);
        get cc(): Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>;
        set cc(value: Nullable<Array<work.socialhub.kslack.entity.file.FileAddress>>);
        get pinnedInfo(): Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.file.FilePinnedInfo>>;
        set pinnedInfo(value: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.file.FilePinnedInfo>>);
    }
    namespace File {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => File;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class FileAddress {
        constructor();
        get address(): Nullable<string>;
        set address(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get original(): Nullable<string>;
        set original(value: Nullable<string>);
    }
    namespace FileAddress {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileAddress;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class FileComment {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get created(): Nullable<number>;
        set created(value: Nullable<number>);
        get timestamp(): Nullable<number>;
        set timestamp(value: Nullable<number>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get isIntro(): boolean;
        set isIntro(value: boolean);
    }
    namespace FileComment {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileComment;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class FilePinnedInfo {
        constructor();
        get pinnedBy(): Nullable<string>;
        set pinnedBy(value: Nullable<string>);
        get pinnedTs(): Nullable<number>;
        set pinnedTs(value: Nullable<number>);
    }
    namespace FilePinnedInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FilePinnedInfo;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class FileShareDetail {
        constructor();
        get replyUsers(): Nullable<Array<string>>;
        set replyUsers(value: Nullable<Array<string>>);
        get replyUsersCount(): Nullable<number>;
        set replyUsersCount(value: Nullable<number>);
        get replyCount(): Nullable<number>;
        set replyCount(value: Nullable<number>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get latestReply(): Nullable<string>;
        set latestReply(value: Nullable<string>);
        get channelName(): Nullable<string>;
        set channelName(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
    }
    namespace FileShareDetail {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileShareDetail;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.file {
    class FileShares {
        constructor();
        get publicChannels(): Nullable<kotlin.collections.KtMap<string, Array<work.socialhub.kslack.entity.file.FileShareDetail>>>;
        set publicChannels(value: Nullable<kotlin.collections.KtMap<string, Array<work.socialhub.kslack.entity.file.FileShareDetail>>>);
        get privateChannels(): Nullable<kotlin.collections.KtMap<string, Array<work.socialhub.kslack.entity.file.FileShareDetail>>>;
        set privateChannels(value: Nullable<kotlin.collections.KtMap<string, Array<work.socialhub.kslack.entity.file.FileShareDetail>>>);
    }
    namespace FileShares {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => FileShares;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class Message {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get subtype(): Nullable<string>;
        set subtype(value: Nullable<string>);
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get isIntro(): boolean;
        set isIntro(value: boolean);
        get isStarred(): boolean;
        set isStarred(value: boolean);
        get isWibblr(): boolean;
        set isWibblr(value: boolean);
        get pinnedTo(): Nullable<Array<string>>;
        set pinnedTo(value: Nullable<Array<string>>);
        get reactions(): Nullable<Array<work.socialhub.kslack.entity.Reaction>>;
        set reactions(value: Nullable<Array<work.socialhub.kslack.entity.Reaction>>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get botLink(): Nullable<string>;
        set botLink(value: Nullable<string>);
        get isDisplayAsBot(): boolean;
        set isDisplayAsBot(value: boolean);
        get botProfile(): Nullable<work.socialhub.kslack.entity.bot.BotProfile>;
        set botProfile(value: Nullable<work.socialhub.kslack.entity.bot.BotProfile>);
        get icons(): Nullable<work.socialhub.kslack.entity.message.MessageIcons>;
        set icons(value: Nullable<work.socialhub.kslack.entity.message.MessageIcons>);
        get file(): Nullable<work.socialhub.kslack.entity.file.File>;
        set file(value: Nullable<work.socialhub.kslack.entity.file.File>);
        get files(): Nullable<Array<work.socialhub.kslack.entity.file.File>>;
        set files(value: Nullable<Array<work.socialhub.kslack.entity.file.File>>);
        get isUpload(): boolean;
        set isUpload(value: boolean);
        get parentUserId(): Nullable<string>;
        set parentUserId(value: Nullable<string>);
        get inviter(): Nullable<string>;
        set inviter(value: Nullable<string>);
        get clientMsgId(): Nullable<string>;
        set clientMsgId(value: Nullable<string>);
        get comment(): Nullable<work.socialhub.kslack.entity.message.MessageItem>;
        set comment(value: Nullable<work.socialhub.kslack.entity.message.MessageItem>);
        get topic(): Nullable<string>;
        set topic(value: Nullable<string>);
        get purpose(): Nullable<string>;
        set purpose(value: Nullable<string>);
        get edited(): Nullable<work.socialhub.kslack.entity.message.MessageEdited>;
        set edited(value: Nullable<work.socialhub.kslack.entity.message.MessageEdited>);
        get isUnfurlLinks(): boolean;
        set isUnfurlLinks(value: boolean);
        get isUnfurlMedia(): boolean;
        set isUnfurlMedia(value: boolean);
        get isThreadBroadcast(): boolean;
        set isThreadBroadcast(value: boolean);
        get replyCount(): Nullable<number>;
        set replyCount(value: Nullable<number>);
        get replyUsers(): Nullable<Array<string>>;
        set replyUsers(value: Nullable<Array<string>>);
        get replyUsersCount(): Nullable<number>;
        set replyUsersCount(value: Nullable<number>);
        get latestReply(): Nullable<string>;
        set latestReply(value: Nullable<string>);
        get isSubscribed(): boolean;
        set isSubscribed(value: boolean);
        get xFiles(): Nullable<Array<string>>;
        set xFiles(value: Nullable<Array<string>>);
        get lastRead(): Nullable<string>;
        set lastRead(value: Nullable<string>);
        get root(): Nullable<work.socialhub.kslack.entity.message.MessageRoot>;
        set root(value: Nullable<work.socialhub.kslack.entity.message.MessageRoot>);
        get itemType(): Nullable<string>;
        set itemType(value: Nullable<string>);
        get item(): Nullable<work.socialhub.kslack.entity.message.MessageItem>;
        set item(value: Nullable<work.socialhub.kslack.entity.message.MessageItem>);
    }
    namespace Message {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Message;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class MessageEdited {
        constructor();
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace MessageEdited {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageEdited;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class MessageIcons {
        constructor();
        get emoji(): Nullable<string>;
        set emoji(value: Nullable<string>);
        get image36(): Nullable<string>;
        set image36(value: Nullable<string>);
        get image48(): Nullable<string>;
        set image48(value: Nullable<string>);
        get image64(): Nullable<string>;
        set image64(value: Nullable<string>);
        get image72(): Nullable<string>;
        set image72(value: Nullable<string>);
    }
    namespace MessageIcons {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageIcons;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class MessageItem {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get created(): Nullable<string>;
        set created(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get isIntro(): boolean;
        set isIntro(value: boolean);
        get isPublic(): boolean;
        set isPublic(value: boolean);
        get isStarred(): boolean;
        set isStarred(value: boolean);
        get isPublicUrlShared(): boolean;
        set isPublicUrlShared(value: boolean);
        get urlPrivate(): Nullable<string>;
        set urlPrivate(value: Nullable<string>);
        get isUrlPrivateDownload(): boolean;
        set isUrlPrivateDownload(value: boolean);
        get permalink(): Nullable<string>;
        set permalink(value: Nullable<string>);
        get isPermalinkPublic(): boolean;
        set isPermalinkPublic(value: boolean);
        get editLink(): Nullable<string>;
        set editLink(value: Nullable<string>);
        get preview(): Nullable<string>;
        set preview(value: Nullable<string>);
        get previewHighlight(): Nullable<string>;
        set previewHighlight(value: Nullable<string>);
        get lines(): Nullable<number>;
        set lines(value: Nullable<number>);
        get linesMore(): Nullable<number>;
        set linesMore(value: Nullable<number>);
        get isPreviewTruncated(): boolean;
        set isPreviewTruncated(value: boolean);
        get isHasRichPreview(): boolean;
        set isHasRichPreview(value: boolean);
        get mimetype(): Nullable<string>;
        set mimetype(value: Nullable<string>);
        get filetype(): Nullable<string>;
        set filetype(value: Nullable<string>);
        get prettyType(): Nullable<string>;
        set prettyType(value: Nullable<string>);
        get isExternal(): boolean;
        set isExternal(value: boolean);
        get externalType(): Nullable<string>;
        set externalType(value: Nullable<string>);
        get isEditable(): boolean;
        set isEditable(value: boolean);
        get isDisplayAsBot(): boolean;
        set isDisplayAsBot(value: boolean);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        get mode(): Nullable<string>;
        set mode(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
    }
    namespace MessageItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageItem;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class MessageRoot {
        constructor();
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get isMrkdwn(): boolean;
        set isMrkdwn(value: boolean);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get subtype(): Nullable<string>;
        set subtype(value: Nullable<string>);
        get threadTs(): Nullable<string>;
        set threadTs(value: Nullable<string>);
        get replyCount(): Nullable<number>;
        set replyCount(value: Nullable<number>);
        get replyUsers(): Nullable<Array<string>>;
        set replyUsers(value: Nullable<Array<string>>);
        get replyUsersCount(): Nullable<number>;
        set replyUsersCount(value: Nullable<number>);
        get latestReply(): Nullable<string>;
        set latestReply(value: Nullable<string>);
        get isSubscribed(): boolean;
        set isSubscribed(value: boolean);
        get lastRead(): Nullable<string>;
        set lastRead(value: Nullable<string>);
        get unreadCount(): Nullable<number>;
        set unreadCount(value: Nullable<number>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
    }
    namespace MessageRoot {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MessageRoot;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.message {
    class ScheduledMessage {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get postAt(): Nullable<number>;
        set postAt(value: Nullable<number>);
        get dateCreated(): Nullable<number>;
        set dateCreated(value: Nullable<number>);
    }
    namespace ScheduledMessage {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ScheduledMessage;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.oauth {
    class OAuthBot {
        constructor();
        get botUserId(): Nullable<string>;
        set botUserId(value: Nullable<string>);
        get botAccessToken(): Nullable<string>;
        set botAccessToken(value: Nullable<string>);
    }
    namespace OAuthBot {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthBot;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.oauth {
    class OAuthIncomingWebhook {
        constructor();
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get channel(): Nullable<string>;
        set channel(value: Nullable<string>);
        get channelId(): Nullable<string>;
        set channelId(value: Nullable<string>);
        get configurationUrl(): Nullable<string>;
        set configurationUrl(value: Nullable<string>);
    }
    namespace OAuthIncomingWebhook {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OAuthIncomingWebhook;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.search {
    class MatchedItem {
        constructor();
        get iid(): Nullable<string>;
        set iid(value: Nullable<string>);
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get channel(): Nullable<work.socialhub.kslack.entity.Channel>;
        set channel(value: Nullable<work.socialhub.kslack.entity.Channel>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get permalink(): Nullable<string>;
        set permalink(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get subject(): Nullable<string>;
        set subject(value: Nullable<string>);
        get preview(): Nullable<string>;
        set preview(value: Nullable<string>);
        get plainText(): Nullable<string>;
        set plainText(value: Nullable<string>);
        get previewPlainText(): Nullable<string>;
        set previewPlainText(value: Nullable<string>);
        get isHasMore(): boolean;
        set isHasMore(value: boolean);
        get isSentToSelf(): boolean;
        set isSentToSelf(value: boolean);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get fileId(): Nullable<string>;
        set fileId(value: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get externalUrl(): Nullable<string>;
        set externalUrl(value: Nullable<string>);
        get timestamp(): Nullable<string>;
        set timestamp(value: Nullable<string>);
        get created(): Nullable<string>;
        set created(value: Nullable<string>);
        get isPublic(): boolean;
        set isPublic(value: boolean);
        get isPublicUrlShared(): boolean;
        set isPublicUrlShared(value: boolean);
        get urlPrivate(): Nullable<string>;
        set urlPrivate(value: Nullable<string>);
        get isUrlPrivateDownload(): boolean;
        set isUrlPrivateDownload(value: boolean);
        get isPermalinkPublic(): boolean;
        set isPermalinkPublic(value: boolean);
        get editLink(): Nullable<string>;
        set editLink(value: Nullable<string>);
        get previewHighlight(): Nullable<string>;
        set previewHighlight(value: Nullable<string>);
        get lines(): Nullable<number>;
        set lines(value: Nullable<number>);
        get linesMore(): Nullable<number>;
        set linesMore(value: Nullable<number>);
        get isPreviewTruncated(): boolean;
        set isPreviewTruncated(value: boolean);
        get isHasRichPreview(): boolean;
        set isHasRichPreview(value: boolean);
        get mimetype(): Nullable<string>;
        set mimetype(value: Nullable<string>);
        get filetype(): Nullable<string>;
        set filetype(value: Nullable<string>);
        get prettyType(): Nullable<string>;
        set prettyType(value: Nullable<string>);
        get isMpim(): boolean;
        set isMpim(value: boolean);
        get isExternal(): boolean;
        set isExternal(value: boolean);
        get isStarred(): boolean;
        set isStarred(value: boolean);
        get externalType(): Nullable<string>;
        set externalType(value: Nullable<string>);
        get isEditable(): boolean;
        set isEditable(value: boolean);
        get isDisplayAsBot(): boolean;
        set isDisplayAsBot(value: boolean);
        get size(): Nullable<number>;
        set size(value: Nullable<number>);
        get mode(): Nullable<string>;
        set mode(value: Nullable<string>);
        get comment(): Nullable<string>;
        set comment(value: Nullable<string>);
        get previous2(): Nullable<work.socialhub.kslack.entity.search.OtherItem>;
        set previous2(value: Nullable<work.socialhub.kslack.entity.search.OtherItem>);
        get previous(): Nullable<work.socialhub.kslack.entity.search.OtherItem>;
        set previous(value: Nullable<work.socialhub.kslack.entity.search.OtherItem>);
        get next(): Nullable<work.socialhub.kslack.entity.search.OtherItem>;
        set next(value: Nullable<work.socialhub.kslack.entity.search.OtherItem>);
        get next2(): Nullable<work.socialhub.kslack.entity.search.OtherItem>;
        set next2(value: Nullable<work.socialhub.kslack.entity.search.OtherItem>);
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
        get groups(): Nullable<Array<string>>;
        set groups(value: Nullable<Array<string>>);
        get ims(): Nullable<Array<string>>;
        set ims(value: Nullable<Array<string>>);
        get thumb64(): Nullable<string>;
        set thumb64(value: Nullable<string>);
        get thumb64Gif(): Nullable<string>;
        set thumb64Gif(value: Nullable<string>);
        get thumb64Width(): Nullable<string>;
        set thumb64Width(value: Nullable<string>);
        get thumb64Height(): Nullable<string>;
        set thumb64Height(value: Nullable<string>);
        get thumb80(): Nullable<string>;
        set thumb80(value: Nullable<string>);
        get thumb80Gif(): Nullable<string>;
        set thumb80Gif(value: Nullable<string>);
        get thumb80Width(): Nullable<string>;
        set thumb80Width(value: Nullable<string>);
        get thumb80Height(): Nullable<string>;
        set thumb80Height(value: Nullable<string>);
        get thumb160(): Nullable<string>;
        set thumb160(value: Nullable<string>);
        get thumb160Gif(): Nullable<string>;
        set thumb160Gif(value: Nullable<string>);
        get thumb160Width(): Nullable<string>;
        set thumb160Width(value: Nullable<string>);
        get thumb160Height(): Nullable<string>;
        set thumb160Height(value: Nullable<string>);
        get thumb360(): Nullable<string>;
        set thumb360(value: Nullable<string>);
        get thumb360Gif(): Nullable<string>;
        set thumb360Gif(value: Nullable<string>);
        get thumb360Width(): Nullable<string>;
        set thumb360Width(value: Nullable<string>);
        get thumb360Height(): Nullable<string>;
        set thumb360Height(value: Nullable<string>);
        get thumb480(): Nullable<string>;
        set thumb480(value: Nullable<string>);
        get thumb480Gif(): Nullable<string>;
        set thumb480Gif(value: Nullable<string>);
        get thumb480Width(): Nullable<string>;
        set thumb480Width(value: Nullable<string>);
        get thumb480Height(): Nullable<string>;
        set thumb480Height(value: Nullable<string>);
        get thumb720(): Nullable<string>;
        set thumb720(value: Nullable<string>);
        get thumb720Gif(): Nullable<string>;
        set thumb720Gif(value: Nullable<string>);
        get thumb720Width(): Nullable<string>;
        set thumb720Width(value: Nullable<string>);
        get thumb720Height(): Nullable<string>;
        set thumb720Height(value: Nullable<string>);
        get thumb800(): Nullable<string>;
        set thumb800(value: Nullable<string>);
        get thumb800Gif(): Nullable<string>;
        set thumb800Gif(value: Nullable<string>);
        get thumb800Width(): Nullable<string>;
        set thumb800Width(value: Nullable<string>);
        get thumb800Height(): Nullable<string>;
        set thumb800Height(value: Nullable<string>);
        get thumb960(): Nullable<string>;
        set thumb960(value: Nullable<string>);
        get thumb960Gif(): Nullable<string>;
        set thumb960Gif(value: Nullable<string>);
        get thumb960Width(): Nullable<string>;
        set thumb960Width(value: Nullable<string>);
        get thumb960Height(): Nullable<string>;
        set thumb960Height(value: Nullable<string>);
        get thumb1024(): Nullable<string>;
        set thumb1024(value: Nullable<string>);
        get thumb1024Gif(): Nullable<string>;
        set thumb1024Gif(value: Nullable<string>);
        get thumb1024Width(): Nullable<string>;
        set thumb1024Width(value: Nullable<string>);
        get thumb1024Height(): Nullable<string>;
        set thumb1024Height(value: Nullable<string>);
        get thumbTiny(): Nullable<string>;
        set thumbTiny(value: Nullable<string>);
        get thumbPdf(): Nullable<string>;
        set thumbPdf(value: Nullable<string>);
        get thumbPdfWidth(): Nullable<string>;
        set thumbPdfWidth(value: Nullable<string>);
        get thumbPdfHeight(): Nullable<string>;
        set thumbPdfHeight(value: Nullable<string>);
        get imageExifRotation(): Nullable<number>;
        set imageExifRotation(value: Nullable<number>);
        get originalWidth(): Nullable<string>;
        set originalWidth(value: Nullable<string>);
        get originalHeight(): Nullable<string>;
        set originalHeight(value: Nullable<string>);
        get score(): Nullable<string>;
        set score(value: Nullable<string>);
        get isTopFile(): boolean;
        set isTopFile(value: boolean);
        get deanimateGif(): Nullable<string>;
        set deanimateGif(value: Nullable<string>);
        get channelActionsTs(): Nullable<string>;
        set channelActionsTs(value: Nullable<string>);
        get channelActionsCount(): Nullable<number>;
        set channelActionsCount(value: Nullable<number>);
        get to(): Nullable<Array<work.socialhub.kslack.entity.search.Address>>;
        set to(value: Nullable<Array<work.socialhub.kslack.entity.search.Address>>);
        get from(): Nullable<Array<work.socialhub.kslack.entity.search.Address>>;
        set from(value: Nullable<Array<work.socialhub.kslack.entity.search.Address>>);
        get cc(): Nullable<Array<work.socialhub.kslack.entity.search.Address>>;
        set cc(value: Nullable<Array<work.socialhub.kslack.entity.search.Address>>);
    }
    namespace MatchedItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => MatchedItem;
        }
    }
    class OtherItem {
        constructor();
        get iid(): Nullable<string>;
        set iid(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get user(): Nullable<string>;
        set user(value: Nullable<string>);
        get username(): Nullable<string>;
        set username(value: Nullable<string>);
        get ts(): Nullable<string>;
        set ts(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get attachments(): Nullable<Array<work.socialhub.kslack.entity.Attachment>>;
        set attachments(value: Nullable<Array<work.socialhub.kslack.entity.Attachment>>);
        get blocks(): Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>;
        set blocks(value: Nullable<Array<work.socialhub.kslack.entity.block.LayoutBlock>>);
        get permalink(): Nullable<string>;
        set permalink(value: Nullable<string>);
    }
    namespace OtherItem {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => OtherItem;
        }
    }
    class Address {
        constructor();
        get address(): Nullable<string>;
        set address(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get original(): Nullable<string>;
        set original(value: Nullable<string>);
    }
    namespace Address {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Address;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.search {
    class SearchResult {
        constructor();
        get total(): Nullable<number>;
        set total(value: Nullable<number>);
        get pagination(): Nullable<work.socialhub.kslack.entity.search.SearchPagination>;
        set pagination(value: Nullable<work.socialhub.kslack.entity.search.SearchPagination>);
        get paging(): Nullable<work.socialhub.kslack.entity.Paging>;
        set paging(value: Nullable<work.socialhub.kslack.entity.Paging>);
        get matches(): Nullable<Array<work.socialhub.kslack.entity.search.MatchedItem>>;
        set matches(value: Nullable<Array<work.socialhub.kslack.entity.search.MatchedItem>>);
        get refinements(): Nullable<Array<string>>;
        set refinements(value: Nullable<Array<string>>);
    }
    namespace SearchResult {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchResult;
        }
    }
    class SearchPagination {
        constructor();
        get totalCount(): Nullable<number>;
        set totalCount(value: Nullable<number>);
        get page(): Nullable<number>;
        set page(value: Nullable<number>);
        get perPage(): Nullable<number>;
        set perPage(value: Nullable<number>);
        get pageCount(): Nullable<number>;
        set pageCount(value: Nullable<number>);
        get first(): Nullable<number>;
        set first(value: Nullable<number>);
        get last(): Nullable<number>;
        set last(value: Nullable<number>);
    }
    namespace SearchPagination {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SearchPagination;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class Profile {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get sectionId(): Nullable<string>;
        set sectionId(value: Nullable<string>);
        get fieldName(): Nullable<string>;
        set fieldName(value: Nullable<string>);
        get ordering(): Nullable<number>;
        set ordering(value: Nullable<number>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
        get hint(): Nullable<string>;
        set hint(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get possibleValues(): Nullable<Array<string>>;
        set possibleValues(value: Nullable<Array<string>>);
        get options(): Nullable<work.socialhub.kslack.entity.team.ProfileOptions>;
        set options(value: Nullable<work.socialhub.kslack.entity.team.ProfileOptions>);
        get isHidden(): boolean;
        set isHidden(value: boolean);
        get inverse(): Nullable<boolean>;
        set inverse(value: Nullable<boolean>);
        get permissions(): Nullable<work.socialhub.kslack.entity.team.ProfilePermissions>;
        set permissions(value: Nullable<work.socialhub.kslack.entity.team.ProfilePermissions>);
    }
    namespace Profile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Profile;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class ProfileOptions {
        constructor();
        get isProtected(): boolean;
        set isProtected(value: boolean);
        get scim(): Nullable<boolean>;
        set scim(value: Nullable<boolean>);
    }
    namespace ProfileOptions {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ProfileOptions;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class ProfilePermissions {
        constructor();
        get api(): Nullable<Array<string>>;
        set api(value: Nullable<Array<string>>);
        get ui(): Nullable<boolean>;
        set ui(value: Nullable<boolean>);
        get scim(): Nullable<boolean>;
        set scim(value: Nullable<boolean>);
    }
    namespace ProfilePermissions {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ProfilePermissions;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class Profiles {
        constructor();
        get fields(): Nullable<Array<work.socialhub.kslack.entity.team.Profile>>;
        set fields(value: Nullable<Array<work.socialhub.kslack.entity.team.Profile>>);
    }
    namespace Profiles {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Profiles;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class Team {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get domain(): Nullable<string>;
        set domain(value: Nullable<string>);
        get emailDomain(): Nullable<string>;
        set emailDomain(value: Nullable<string>);
        get icon(): Nullable<work.socialhub.kslack.entity.team.TeamIcon>;
        set icon(value: Nullable<work.socialhub.kslack.entity.team.TeamIcon>);
        get url(): Nullable<string>;
        set url(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get enterpriseName(): Nullable<string>;
        set enterpriseName(value: Nullable<string>);
        get enterpriseDomain(): Nullable<string>;
        set enterpriseDomain(value: Nullable<string>);
        get defaultChannels(): Nullable<Array<string>>;
        set defaultChannels(value: Nullable<Array<string>>);
        get isVerified(): Nullable<boolean>;
        set isVerified(value: Nullable<boolean>);
        get discoverable(): Nullable<string>;
        set discoverable(value: Nullable<string>);
        get avatarBaseUrl(): Nullable<string>;
        set avatarBaseUrl(value: Nullable<string>);
        get lobSalesHomeEnabled(): Nullable<boolean>;
        set lobSalesHomeEnabled(value: Nullable<boolean>);
    }
    namespace Team {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Team;
        }
        class Profile {
            constructor();
            get id(): Nullable<string>;
            set id(value: Nullable<string>);
            get fieldName(): Nullable<string>;
            set fieldName(value: Nullable<string>);
            get ordering(): Nullable<number>;
            set ordering(value: Nullable<number>);
            get label(): Nullable<string>;
            set label(value: Nullable<string>);
            get hint(): Nullable<string>;
            set hint(value: Nullable<string>);
            get type(): Nullable<string>;
            set type(value: Nullable<string>);
            get possibleValues(): Nullable<Array<string>>;
            set possibleValues(value: Nullable<Array<string>>);
            get options(): Nullable<work.socialhub.kslack.entity.team.Team.ProfileOptions>;
            set options(value: Nullable<work.socialhub.kslack.entity.team.Team.ProfileOptions>);
            get isHidden(): boolean;
            set isHidden(value: boolean);
        }
        namespace Profile {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => Profile;
            }
        }
        class ProfileOptions {
            constructor();
            get isProtected(): boolean;
            set isProtected(value: boolean);
            is_protected(): boolean;
            set_protected(_protected: boolean): void;
        }
        namespace ProfileOptions {
            /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
            namespace $metadata$ {
                const constructor: abstract new () => ProfileOptions;
            }
        }
    }
}
export declare namespace work.socialhub.kslack.entity.team {
    class TeamIcon {
        constructor();
        get imageOriginal(): Nullable<string>;
        set imageOriginal(value: Nullable<string>);
        get image34(): Nullable<string>;
        set image34(value: Nullable<string>);
        get image44(): Nullable<string>;
        set image44(value: Nullable<string>);
        get image68(): Nullable<string>;
        set image68(value: Nullable<string>);
        get image88(): Nullable<string>;
        set image88(value: Nullable<string>);
        get image102(): Nullable<string>;
        set image102(value: Nullable<string>);
        get image132(): Nullable<string>;
        set image132(value: Nullable<string>);
        get image230(): Nullable<string>;
        set image230(value: Nullable<string>);
        get isImageDefault(): boolean;
        set isImageDefault(value: boolean);
    }
    namespace TeamIcon {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => TeamIcon;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class EnterpriseUser {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get enterpriseId(): Nullable<string>;
        set enterpriseId(value: Nullable<string>);
        get enterpriseName(): Nullable<string>;
        set enterpriseName(value: Nullable<string>);
        get primaryOwner(): boolean;
        set primaryOwner(value: boolean);
        get isAdmin(): boolean;
        set isAdmin(value: boolean);
        get isOwner(): boolean;
        set isOwner(value: boolean);
        get teams(): Nullable<Array<string>>;
        set teams(value: Nullable<Array<string>>);
    }
    namespace EnterpriseUser {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => EnterpriseUser;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class Prefs {
        constructor();
        get channels(): Nullable<Array<string>>;
        set channels(value: Nullable<Array<string>>);
        get groups(): Nullable<Array<string>>;
        set groups(value: Nullable<Array<string>>);
    }
    namespace Prefs {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Prefs;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class Profile {
        constructor();
        get guestChannels(): Nullable<string>;
        set guestChannels(value: Nullable<string>);
        get guestInvitedBy(): Nullable<string>;
        get guestExpirationTs(): Nullable<number>;
        set guestExpirationTs(value: Nullable<number>);
        get avatarHash(): Nullable<string>;
        set avatarHash(value: Nullable<string>);
        get statusText(): Nullable<string>;
        set statusText(value: Nullable<string>);
        get statusTextCanonical(): Nullable<string>;
        set statusTextCanonical(value: Nullable<string>);
        get statusEmoji(): Nullable<string>;
        set statusEmoji(value: Nullable<string>);
        get statusEmojiUrl(): Nullable<string>;
        set statusEmojiUrl(value: Nullable<string>);
        get statusExpiration(): Nullable<number>;
        set statusExpiration(value: Nullable<number>);
        get displayName(): Nullable<string>;
        set displayName(value: Nullable<string>);
        get displayNameNormalized(): Nullable<string>;
        set displayNameNormalized(value: Nullable<string>);
        get realName(): Nullable<string>;
        set realName(value: Nullable<string>);
        get realNameNormalized(): Nullable<string>;
        set realNameNormalized(value: Nullable<string>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
        get title(): Nullable<string>;
        set title(value: Nullable<string>);
        get email(): Nullable<string>;
        set email(value: Nullable<string>);
        get skype(): Nullable<string>;
        set skype(value: Nullable<string>);
        get phone(): Nullable<string>;
        set phone(value: Nullable<string>);
        get team(): Nullable<string>;
        set team(value: Nullable<string>);
        get apiAppId(): Nullable<string>;
        set apiAppId(value: Nullable<string>);
        get isAlwaysActive(): boolean;
        set isAlwaysActive(value: boolean);
        get imageOriginal(): Nullable<string>;
        set imageOriginal(value: Nullable<string>);
        get image24(): Nullable<string>;
        set image24(value: Nullable<string>);
        get image32(): Nullable<string>;
        set image32(value: Nullable<string>);
        get image48(): Nullable<string>;
        set image48(value: Nullable<string>);
        get image72(): Nullable<string>;
        set image72(value: Nullable<string>);
        get image192(): Nullable<string>;
        set image192(value: Nullable<string>);
        get image512(): Nullable<string>;
        set image512(value: Nullable<string>);
        get image1024(): Nullable<string>;
        set image1024(value: Nullable<string>);
        get isCustomImage(): boolean;
        set isCustomImage(value: boolean);
        get pronouns(): Nullable<string>;
        set pronouns(value: Nullable<string>);
        get statusEmojiDisplayInfo(): Nullable<Array<work.socialhub.kslack.entity.user.StatusEmojiDisplayInfo>>;
        set statusEmojiDisplayInfo(value: Nullable<Array<work.socialhub.kslack.entity.user.StatusEmojiDisplayInfo>>);
        get fields(): Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.user.ProfileField>>;
        set fields(value: Nullable<kotlin.collections.KtMap<string, work.socialhub.kslack.entity.user.ProfileField>>);
        get huddleState(): Nullable<string>;
        get huddleStateExpirationTs(): Nullable<number>;
        /** @deprecated  */
        get firstName(): Nullable<string>;
        set firstName(value: Nullable<string>);
        /** @deprecated  */
        get lastName(): Nullable<string>;
        set lastName(value: Nullable<string>);
    }
    namespace Profile {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Profile;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class ProfileField {
        constructor();
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get alt(): Nullable<string>;
        set alt(value: Nullable<string>);
        get label(): Nullable<string>;
        set label(value: Nullable<string>);
    }
    namespace ProfileField {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ProfileField;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class StatusEmojiDisplayInfo {
        constructor();
        get emojiName(): Nullable<string>;
        get displayAlias(): Nullable<string>;
        get displayUrl(): Nullable<string>;
        get unicode(): Nullable<string>;
    }
    namespace StatusEmojiDisplayInfo {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => StatusEmojiDisplayInfo;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class User {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get isDeleted(): boolean;
        set isDeleted(value: boolean);
        get color(): Nullable<string>;
        set color(value: Nullable<string>);
        get realName(): Nullable<string>;
        set realName(value: Nullable<string>);
        get tz(): Nullable<string>;
        set tz(value: Nullable<string>);
        get tzLabel(): Nullable<string>;
        set tzLabel(value: Nullable<string>);
        get tzOffset(): Nullable<number>;
        set tzOffset(value: Nullable<number>);
        get profile(): Nullable<work.socialhub.kslack.entity.user.Profile>;
        set profile(value: Nullable<work.socialhub.kslack.entity.user.Profile>);
        get isAdmin(): boolean;
        set isAdmin(value: boolean);
        get isOwner(): boolean;
        set isOwner(value: boolean);
        get isPrimaryOwner(): boolean;
        set isPrimaryOwner(value: boolean);
        get isInvitedUser(): boolean;
        set isInvitedUser(value: boolean);
        get isRestricted(): boolean;
        set isRestricted(value: boolean);
        get isUltraRestricted(): boolean;
        set isUltraRestricted(value: boolean);
        get isBot(): boolean;
        set isBot(value: boolean);
        get isConnectorBot(): boolean;
        get isAppUser(): boolean;
        set isAppUser(value: boolean);
        get updated(): Nullable<number>;
        set updated(value: Nullable<number>);
        get isHas2fa(): boolean;
        set isHas2fa(value: boolean);
        get isEmailConfirmed(): boolean;
        set isEmailConfirmed(value: boolean);
        get presence(): Nullable<string>;
        set presence(value: Nullable<string>);
        get enterpriseUser(): Nullable<work.socialhub.kslack.entity.user.EnterpriseUser>;
        set enterpriseUser(value: Nullable<work.socialhub.kslack.entity.user.EnterpriseUser>);
        get twoFactorType(): Nullable<string>;
        set twoFactorType(value: Nullable<string>);
        get isHasFiles(): boolean;
        set isHasFiles(value: boolean);
        get locale(): Nullable<string>;
        set locale(value: Nullable<string>);
        get isWorkflowBot(): boolean;
        set isWorkflowBot(value: boolean);
        get whoCanShareContactCard(): Nullable<string>;
        set whoCanShareContactCard(value: Nullable<string>);
    }
    namespace User {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => User;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.user {
    class UserGroup {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get enterpriseSubteamId(): Nullable<string>;
        set enterpriseSubteamId(value: Nullable<string>);
        get isUsergroup(): boolean;
        set isUsergroup(value: boolean);
        get isSubteam(): boolean;
        set isSubteam(value: boolean);
        get name(): Nullable<string>;
        set name(value: Nullable<string>);
        get description(): Nullable<string>;
        set description(value: Nullable<string>);
        get handle(): Nullable<string>;
        set handle(value: Nullable<string>);
        get isExternal(): boolean;
        set isExternal(value: boolean);
        get isAutoProvision(): boolean;
        set isAutoProvision(value: boolean);
        get dateCreate(): Nullable<number>;
        set dateCreate(value: Nullable<number>);
        get dateUpdate(): Nullable<number>;
        set dateUpdate(value: Nullable<number>);
        get dateDelete(): Nullable<number>;
        set dateDelete(value: Nullable<number>);
        get autoType(): Nullable<string>;
        set autoType(value: Nullable<string>);
        get createdBy(): Nullable<string>;
        set createdBy(value: Nullable<string>);
        get updatedBy(): Nullable<string>;
        set updatedBy(value: Nullable<string>);
        get deletedBy(): Nullable<string>;
        set deletedBy(value: Nullable<string>);
        get prefs(): Nullable<work.socialhub.kslack.entity.user.Prefs>;
        set prefs(value: Nullable<work.socialhub.kslack.entity.user.Prefs>);
        get users(): Nullable<Array<string>>;
        set users(value: Nullable<Array<string>>);
        get userCount(): Nullable<number>;
        set userCount(value: Nullable<number>);
        get channelCount(): Nullable<number>;
    }
    namespace UserGroup {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => UserGroup;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.view {
    class View {
        constructor();
        get id(): Nullable<string>;
        set id(value: Nullable<string>);
        get teamId(): Nullable<string>;
        set teamId(value: Nullable<string>);
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get privateMetadata(): Nullable<string>;
        set privateMetadata(value: Nullable<string>);
        get callbackId(): Nullable<string>;
        set callbackId(value: Nullable<string>);
        get externalId(): Nullable<string>;
        set externalId(value: Nullable<string>);
        get hash(): Nullable<string>;
        set hash(value: Nullable<string>);
        get clearOnClose(): Nullable<boolean>;
        set clearOnClose(value: Nullable<boolean>);
        get notifyOnClose(): Nullable<boolean>;
        set notifyOnClose(value: Nullable<boolean>);
        get rootViewId(): Nullable<string>;
        set rootViewId(value: Nullable<string>);
        get previousViewId(): Nullable<string>;
        set previousViewId(value: Nullable<string>);
        get appId(): Nullable<string>;
        set appId(value: Nullable<string>);
        get botId(): Nullable<string>;
        set botId(value: Nullable<string>);
    }
    namespace View {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => View;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.view {
    class ViewClose {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get isEmoji(): boolean;
        set isEmoji(value: boolean);
    }
    namespace ViewClose {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewClose;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.view {
    class ViewState {
        constructor();
        get values(): Nullable<kotlin.collections.KtMap<string, kotlin.collections.KtMap<string, work.socialhub.kslack.entity.view.Value>>>;
        set values(value: Nullable<kotlin.collections.KtMap<string, kotlin.collections.KtMap<string, work.socialhub.kslack.entity.view.Value>>>);
    }
    namespace ViewState {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewState;
        }
    }
    class Value {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
        get selectedDate(): Nullable<string>;
        set selectedDate(value: Nullable<string>);
        get selectedConversation(): Nullable<string>;
        set selectedConversation(value: Nullable<string>);
        get selectedChannel(): Nullable<string>;
        set selectedChannel(value: Nullable<string>);
        get selectedUser(): Nullable<string>;
        set selectedUser(value: Nullable<string>);
        get selectedOption(): Nullable<work.socialhub.kslack.entity.view.SelectedOption>;
        set selectedOption(value: Nullable<work.socialhub.kslack.entity.view.SelectedOption>);
        get selectedUsers(): Nullable<Array<string>>;
        set selectedUsers(value: Nullable<Array<string>>);
    }
    namespace Value {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => Value;
        }
    }
    class SelectedOption {
        constructor();
        get text(): Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>;
        set text(value: Nullable<work.socialhub.kslack.entity.block.composition.PlainTextObject>);
        get value(): Nullable<string>;
        set value(value: Nullable<string>);
    }
    namespace SelectedOption {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => SelectedOption;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.view {
    class ViewSubmit {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get isEmoji(): boolean;
        set isEmoji(value: boolean);
    }
    namespace ViewSubmit {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewSubmit;
        }
    }
}
export declare namespace work.socialhub.kslack.entity.view {
    class ViewTitle {
        constructor();
        get type(): Nullable<string>;
        set type(value: Nullable<string>);
        get text(): Nullable<string>;
        set text(value: Nullable<string>);
        get isEmoji(): boolean;
        set isEmoji(value: boolean);
    }
    namespace ViewTitle {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            const constructor: abstract new () => ViewTitle;
        }
    }
}
export declare namespace work.socialhub.kslack {
    abstract class KslackFactory extends KtSingleton<KslackFactory.$metadata$.constructor>() {
        private constructor();
    }
    namespace KslackFactory {
        /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
        namespace $metadata$ {
            abstract class constructor {
                instance(): work.socialhub.kslack.Slack;
                private constructor();
            }
        }
    }
}
export as namespace work_socialhub_kslack_all;