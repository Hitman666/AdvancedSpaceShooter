#pragma strict

public var asteroidExplosion : GameObject;
public var playerExplosion : GameObject;
private var gameController : GameController;

function Start(){
	var gameControllerObject : GameObject = GameObject.FindWithTag("GameController");
	if (gameControllerObject != null){
		gameController = gameControllerObject.GetComponent(GameController);
	}
	else{
		Debug.Log("oops");
	}
}

function OnTriggerEnter (other : Collider) {
	if (other.tag == "Boundary"){
		return;
	}
	
	//it will create an explosion on the same position as our asteroid
	Instantiate(asteroidExplosion, transform.position, transform.rotation);
	
	if (other.tag == "Player"){
		Instantiate(playerExplosion, other.transform.position, other.transform.rotation);
		gameController.GameOver();
	}
	
	gameController.IncreaseCount();
	
	Destroy(other.gameObject);
	Destroy(gameObject);
}