// https://texteditor.com/multiline-text-art/
import { Vector3 } from 'three'

//  ▄▄▄·  ▐ ▄ ▪  • ▌ ▄ ·.  ▄▄▄· ▄▄▄▄▄▪         ▐ ▄ .▄▄ ·
// ▐█ ▀█ •█▌▐███ ·██ ▐███▪▐█ ▀█ •██  ██  ▄█▀▄ •█▌▐█▐█ ▀.
// ▄█▀▀█ ▐█▐▐▌▐█·▐█ ▌▐▌▐█·▄█▀▀█  ▐█.▪▐█·▐█▌.▐▌▐█▐▐▌▄▀▀▀█▄
// ▐█▪ ▐▌██▐█▌▐█▌██ ██▌▐█▌▐█▪ ▐▌ ▐█▌·▐█▌▐█▌.▐▌██▐█▌▐█▄▪▐█
//  ▀  ▀ ▀▀ █▪▀▀▀▀▀  █▪▀▀▀ ▀  ▀  ▀▀▀ ▀▀▀ ▀█▄▀▪▀▀ █▪ ▀▀▀▀

// constants.ts
// Landing Camera animations
export const startCameraPositions = {
	startX: -36.04,
	startY: 15.48,
	startZ: -14.09,
}
export const finalCameraPositions = { endX: -10.18, endY: 3.95, endZ: 0.4 }

// toPlayer Camera animations
export const startPlayerCameraPositions = {
	startX: -10.18,
	startY: 5.95,
	startZ: 0.4,
}
export const finalPlayerCameraPositions = {
	endX: -15.42,
	endY: -18.87,
	endZ: 5.18,
}

//  ███▄ ▄███▓ ▒█████  ▓█████▄ ▓█████  ██▓      ██████
// ▓██▒▀█▀ ██▒▒██▒  ██▒▒██▀ ██▌▓█   ▀ ▓██▒    ▒██    ▒
// ▓██    ▓██░▒██░  ██▒░██   █▌▒███   ▒██░    ░ ▓██▄
// ▒██    ▒██ ▒██   ██░░▓█▄   ▌▒▓█  ▄ ▒██░      ▒   ██▒
// ▒██▒   ░██▒░ ████▓▒░░▒████▓ ░▒████▒░██████▒▒██████▒▒
// ░ ▒░   ░  ░░ ▒░▒░▒░  ▒▒▓  ▒ ░░ ▒░ ░░ ▒░▓  ░▒ ▒▓▒ ▒ ░
// ░  ░      ░  ░ ▒ ▒░  ░ ▒  ▒  ░ ░  ░░ ░ ▒  ░░ ░▒  ░ ░
// ░      ░   ░ ░ ░ ▒   ░ ░  ░    ░     ░ ░   ░  ░  ░
//        ░       ░ ░     ░       ░  ░    ░  ░      ░
// TV defaults
export const tvConfig = {
	position: [1, 2.25, 0],
	rotation: [0, 5, 0],
}
