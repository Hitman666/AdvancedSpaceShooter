#pragma strict

public var aliveTime : float;
function Start () {
	Destroy(gameObject, aliveTime);
}