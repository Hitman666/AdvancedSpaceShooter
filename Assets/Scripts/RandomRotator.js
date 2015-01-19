#pragma strict

public var tumble : float;

function Start () {
	rigidbody.angularVelocity = Random.insideUnitSphere * tumble;
}