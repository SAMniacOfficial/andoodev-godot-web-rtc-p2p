// TODO: Protobuf. Redoo all this and achieve end-to-end type saftey... somehow.

// Note: the 0 indexed enums that the godot client expects are in the comments... not great, but.
// New entries should be incremented to evolve the api, no removing... unless you're careful.
export enum EAction {
	Confirm = 'Confirm', // 0
	GetUsers = 'GetUsers', // 1
	PlayerJoin = 'PlayerJoin', // 2
	PlayerLeft = 'PlayerLeft', // 3
	GetLobbies = 'GetLobbies', // 4
	GetLobbyInfo = 'GetLobbyInfo',
	CreateLobby = 'CreateLobby', // 5
	JoinLobby = 'JoinLobby', // 6
	LeaveLobby = 'LeaveLobby', // 7
	LobbyChanged = 'LobbyChanged', // 8
	GameStarted = 'GameStarted', // 9
	PlayerInfoUpdate = 'PlayerInfoUpdate', // 10
	// Web RTC
	NewPeerConnection = 'NewPeerConnection', // 11
	Offer = 'Offer', // 12
	Answer = 'Answer', // 13
	Candidate = 'Candidate', // 14
	KickPlayer = 'KickPlayer', // 15
	LobbyEvent = 'LobbyEvent',
	SetIceServers = 'SetIceServers',
}
