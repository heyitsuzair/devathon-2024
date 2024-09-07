"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import { createForm, listForPublic } from "@/actions";
import {
  FancyBox,
  FancyImage,
  Flex,
  FullPageLoader,
  Grid,
  TextMd,
} from "@/components";
import Tests from "./Tests";
import { constants, questionsCategories } from "@/config";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const { showErrorMessage, showSuccessMessage } = useToast();

  const getTests = async () => {
    setIsLoading(true);
    const { success, data } = await listForPublic(
      questionsCategories[activeTab].value
    );
    setIsLoading(false);

    if (success) {
      setTests(data);
    }
  };

  useEffect(() => {
    getTests();
    if (searchParams.get("success") === "false")
      showErrorMessage(constants.ERROR.REQUEST_CANCELED);
    if (searchParams.get("success") === "true")
      showSuccessMessage(constants.SUCCESS.COURSE_BOUGHT);
  }, [activeTab]);

  if (isLoading) {
    return <FullPageLoader isVisible={isLoading} />;
  }
  return (
    <div className="m-10">
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-10">
        <Tests tests={tests} />
      </div>
    </div>
  );
}
