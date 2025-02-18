import BookForm from "@/components/admin/forms/BookForm";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <Button asChild className="back-btn">
        <Link href="/admin/books">Go Back</Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BookForm type={"create"} />
      </section>
    </>
  );
};

export default Page;
