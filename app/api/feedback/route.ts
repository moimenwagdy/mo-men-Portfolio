export async function GET() {
  const client = await MongoClient.connect(
    "mongodb+srv://moimenwy:JmzK4zJ20IEfiBJH@cluster0.r2rqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const feedbackCollection = db.collection("feedback");
  const result = await feedbackCollection.find().toArray();
  client.close();
  return NextResponse.json(result, { status: 201 });
}

import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const client = await MongoClient.connect(
    "mongodb+srv://moimenwy:JmzK4zJ20IEfiBJH@cluster0.r2rqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const body = await request.json();

  const db = client.db();
  const feedbackCollection = db.collection("feedback");
  const result = await feedbackCollection.insertOne(body);

  return NextResponse.json(result, { status: 201 });
}
