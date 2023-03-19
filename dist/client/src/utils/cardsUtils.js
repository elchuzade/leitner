"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCards = void 0;
const filterCards = (cards, stage) => cards === null || cards === void 0 ? void 0 : cards.filter((c) => c.stage === stage);
exports.filterCards = filterCards;
