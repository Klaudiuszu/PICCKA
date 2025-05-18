"use client";

import React from "react";

const PizzaSeoContent = () => {
  return (
    <section className="w-full px-4 py-16 bg-orange text-white max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Pizza na wesele i imprezy – Mobilna Pizzeria PICCKA 🍕
      </h1>
      <p className="text-lg mb-4">
        Szukasz pomysłu na niezapomnianą atrakcję na swoje wesele lub imprezę? Nasza
        <strong> mobilna pizzeria PICCKA</strong> to połączenie wyjątkowego smaku i klimatu prawdziwej, włoskiej ulicy!
        Pizza wypiekana na miejscu w temperaturze 500°C to nie tylko jedzenie – to doświadczenie, które Twoi goście będą wspominać latami!
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Dlaczego warto wybrać pizzę na wesele?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Szybki wypiek</strong> – pizza gotowa w 90 sekund!</li>
        <li><strong>Włoskie składniki</strong> – pomidory San Marzano, mozzarella fior di latte, oliwa extra vergine</li>
        <li><strong>Show dla gości</strong> – otwarta kuchnia, piec opalany drewnem i zapach świeżej pizzy w powietrzu</li>
        <li><strong>Bezproblemowa obsługa</strong> – przyjeżdżamy z całym sprzętem i personelem</li>
        <li><strong>Dopasowanie do imprezy</strong> – wesele, urodziny, event firmowy? Jesteśmy elastyczni!</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Pizza na imprezę firmową, urodziny, wieczór panieński?</h2>
      <p className="text-lg mb-4">
        Nasze pizze świetnie sprawdzają się nie tylko na weselach, ale również na imprezach plenerowych, integracjach firmowych,
        garden party czy wieczorach panieńskich. Dzięki mobilnej formie możemy dotrzeć w każde miejsce w Polsce!
      </p>

      <p className="text-lg mb-6">
        Zadbaj o to, by Twoja <strong>pizza na imprezie</strong> była nie tylko smaczna, ale też robiła wrażenie!
        Sprawdź naszą ofertę na{" "}
        <a
          href="https://piccka.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkRed underline font-medium"
        >
          piccka.pl
        </a>
        .
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-2">Zarezerwuj termin już dziś!</h3>
      <p className="text-lg">
        Terminy rozchodzą się błyskawicznie – nie czekaj! 🍕🎉 Napisz do nas, a wspólnie stworzymy pyszne i niezapomniane wydarzenie.
      </p>
    </section>
  );
};

export default PizzaSeoContent;
