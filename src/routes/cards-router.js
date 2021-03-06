import express from "express";

import {
  getAllCards,
  getCardsByCharacter,
  getCardByID,
} from "../db/queries/01_cards.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const { character } = req.query;
  const cards = await getCardsByCharacter(character);
  const json = {};
  for (const card of cards) {
    json[card._id] = card;
  }
  res.json(json);
});

router.get("/all", async (req, res) => {
  const cards = await getAllCards();
  const json = {};
  for (const card of cards) {
    json[card._id] = card;
  }
  res.json(json);
});

router.get("/:cardID", async (req, res) => {
  const { cardID } = req.params;
  const card = await getCardByID(parseInt(cardID));
  res.json(card);
});
