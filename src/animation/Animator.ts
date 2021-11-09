import AnimationBase from "./AnimationBase";

class Animator {
	animations: AnimationBase[] = [];

	addAnimation(anim: AnimationBase) {
		this.animations.push(anim);
	}
}

export default Animator;
