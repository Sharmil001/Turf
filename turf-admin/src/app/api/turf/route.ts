// pages/api/turf/[id].ts
import { connectDb } from "@/dbconfig/DbConfig";
import Turf from "@/models/Turf";
import { NextRequest, NextResponse } from "next/server";
import { jwtMiddleware } from "../middleware/jwtMiddleware";

export async function GET(req: NextRequest) {
  await connectDb();
  const middlewareResponse = await jwtMiddleware(req);
  if (middlewareResponse) {
    return middlewareResponse;
  }

  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    // Find the turf by ID
    if (id) {
      const turf = await Turf.findById(id);

      if (!turf) {
        return NextResponse.json(
          { success: false, error: "Turf not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: turf }, { status: 200 });
    }
    const turfs = await Turf.find({});
    return NextResponse.json({ success: true, data: turfs }, { status: 200 });
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
  const middlewareResponse = await jwtMiddleware(req);
  if (middlewareResponse) {
    return middlewareResponse;
  }
  try {
    const turf = await Turf.create(body);
    return NextResponse.json(
      { success: true, data: turf, message: "Turf Added Successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest) {
  await connectDb();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const body = await req.json();

  const middlewareResponse = await jwtMiddleware(req);
  if (middlewareResponse) {
    return middlewareResponse;
  }

  try {
    const turf = await Turf.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!turf) {
      return NextResponse.json(
        { success: false, message: "Turf not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, data: turf, message: "Updated Successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  // check if valid token
  const middlewareResponse = await jwtMiddleware(req);
  if (middlewareResponse) {
    return middlewareResponse;
  }

  await connectDb();

  try {
    const deletedTurf = await Turf.deleteOne({ _id: id });
    if (!deletedTurf.deletedCount) {
      return NextResponse.json(
        { success: false, message: "Turf not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        data: { deletedTurf, _id: id },
        message: "Deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
