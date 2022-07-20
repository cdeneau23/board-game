import { Entry } from "contentful"
import { CardEffect } from "./card-effect"
import { CardType } from "./card-type"

export type CardEntry = {
	title: string,
	description: string,
	image: any, // Todo: figure out this type
	cardType: Entry<CardType>[] 
	effects: Entry<CardEffect>[]
}

export type Card = {
	title: string,
	description: string,
	image: any, // Todo: figure out this type
	cardType: CardType[] 
	effects: CardEffect[]
}