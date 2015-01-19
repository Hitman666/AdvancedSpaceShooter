#pragma strict

public var speed : float = 10;
function Start () {
	rigidbody.velocity = transform.forward * speed;
}