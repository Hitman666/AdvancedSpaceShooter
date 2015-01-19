#pragma strict

public var enemy : GameObject;
public var spawnValues : Vector3;
public var enemyCount : int;
public var waitForEnemy : float;
public var waitForPlayer : float;
public var waveWait : float;

public var scoreText : UnityEngine.UI.Text;
public var restartText : UnityEngine.UI.Text;
public var gameOverText : UnityEngine.UI.Text;

private var restart : boolean;
private var gameOver : boolean;

private var score : int;

function Start () {
	restart = false;
	gameOver = false;
	
	restartText.text = "";
	gameOverText.text = "";
	
	score = 0;
	updateScore();
	SpawnWaves();
}

function Update(){
	if (restart){
		if (Input.GetKeyDown(KeyCode.R)){
			Application.LoadLevel(Application.loadedLevel);
		}
	}
}

function SpawnWaves(){
	yield WaitForSeconds(waitForPlayer);
	
	while (true){
		for (var i=0; i<enemyCount; i++){
			var spawnPosition = Vector3(Random.Range(-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
			var spawnRotation = Quaternion.identity;
		
			Instantiate(enemy, spawnPosition, spawnRotation);
			yield WaitForSeconds(waitForEnemy);
		}
		
		if (gameOver){
			restartText.text = "R to restart";
			restart = true;
			break;
		}
	}
	
	yield WaitForSeconds(waveWait);	
}

function updateScore(){
	scoreText.text = "Score: " + score;
}

function IncreaseCount(){
	score ++;
	updateScore();
}

function GameOver(){
	gameOver = true;
	gameOverText.text = "Game over!";
}