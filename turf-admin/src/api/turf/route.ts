// pages/api/turf/[id].ts
import { connectDb } from "@/dbconfig/DbConfig";
import Turf from "@/models/Turf";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await connectDb();

  try {
    const turf = await Turf.findById(id);
    if (!turf) {
      return NextResponse.json(
        { success: false, error: "Turf not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: turf }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  await connectDb();

  try {
    const turf = await Turf.create(body);
    return NextResponse.json({ success: true, data: turf }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();

  await connectDb();

  try {
    const turf = await Turf.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!turf) {
      return NextResponse.json(
        { success: false, error: "Turf not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: turf }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await connectDb();

  try {
    const deletedTurf = await Turf.deleteOne({ _id: id });
    if (!deletedTurf.deletedCount) {
      return NextResponse.json(
        { success: false, error: "Turf not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
