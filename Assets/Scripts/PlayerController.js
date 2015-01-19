#pragma strict

public class Boundary extends System.Object {
	public var zMin : float;
	public var zMax : float;
	public var xMin : float;
	public var xMax : float;
}

public var bullet : GameObject;

public var speed = 10;
public var boundary : Boundary; 
public var tilt = 4;
public var waitPeriod = 0.05;
private var nextFire : float;

function FixedUpdate () {
	var moveHorizontal = Input.GetAxis("Horizontal") ;
	var moveVertical = Input.GetAxis("Vertical");
	
	rigidbody.velocity = Vector3(moveHorizontal, 0, moveVertical) * speed;	
	
	rigidbody.position = Vector3(
		Mathf.Clamp(rigidbody.position.x, boundary.xMin, boundary.xMax),
		0,
		Mathf.Clamp(rigidbody.position.z, boundary.zMin, boundary.zMax)
	);
	
	rigidbody.rotation = Quaternion.Euler(0, 0, rigidbody.velocity.x * - tilt);
}

function Update(){
	if (Input.GetButton("Fire1") && Time.time > nextFire){
		nextFire = Time.time + waitPeriod;
		Instantiate(bullet, Vector3(rigidbody.position.x, 0, rigidbody.position.z), Quaternion.identity);
		
		audio.Play();
	}
}