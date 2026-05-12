"use client";

import { create } from "zustand";
import { Issue } from "@/types/issue";

type Store = {
  issues: Issue[];
  currentIssue: Issue | null;
  addIssue: (issue: Issue) => void;
  setCurrentIssue: (issue: Issue) => void;
};

export const useIssueStore = create<Store>((set) => ({
  issues: [],
  currentIssue: null,

  addIssue: (issue) =>
    set((state) => ({
      issues: [issue, ...state.issues],
    })),

  setCurrentIssue: (issue) =>
    set({
      currentIssue: issue,
    }),
}));
