extends Node3D

class_name World


signal signal_player_death(id)
signal signal_player_kill(id)

@onready var player_container = $PlayerContainer

var player_scene = preload("res://game/PlayerCharacter/PlayerCharacterScene.tscn")

## TODO: 
# - Reload weapons while dead
# - Log messages in-game (killed by X messages)? (upper right corner)
# - Add Melee 
# - Nerf or change how jump works?
# - Disconnect button hide/show game world. unmount world, show

func _ready() -> void:
	add_to_group('World')

	LobbySystem.add_player_to_game(multiplayer.get_unique_id())

@rpc("any_peer", 'call_local', 'reliable')
func broadcast_player_death(id: String):
	signal_player_death.emit(id)
	
@rpc("any_peer", 'call_local', 'reliable')
func broadcast_player_kill(id: String):
	signal_player_kill.emit(id)


func add_player_to_world(peer_id: int):
	var new_player: PlayerCharacter = player_scene.instantiate()
	new_player.name = str(peer_id)
	new_player.position = Vector3(randi_range(-2, 2), 0.8, randi_range(-2, 2)) * 10
	player_container.add_child(new_player, true)
