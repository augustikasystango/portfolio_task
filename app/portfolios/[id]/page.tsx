"use client";
import SelectedProfileComponent from "@/components/profiles/selectedProfile";
import { useParams } from "next/navigation";

export default function SelectedProfilePage() {
    const { id } = useParams();
 
    return (
      <SelectedProfileComponent id={id}  />
    );
}
