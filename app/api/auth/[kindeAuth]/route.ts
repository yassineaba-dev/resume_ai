import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth();


export async function GET() {
  try {
    const data = await db.query.documentTable.findMany();

    return Response.json({
      success: true,
      data
    });

  } catch (error) {
    console.error(error);

    return Response.json({
      success: false,
      message: "Server Error"
    }, { status: 500 });
  }
}
