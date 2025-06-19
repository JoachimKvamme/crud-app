"use server";

import { db } from "@/db";
import type { Post } from "@prisma/client";

import { revalidatePath } from "next/cache";
import 