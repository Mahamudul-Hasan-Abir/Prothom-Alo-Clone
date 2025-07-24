"use client";

import Container from "@/components/Container/Container";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <div className="h-screen bg-amber-500">{t("title")} </div>
      </Container>
    </div>
  );
}
