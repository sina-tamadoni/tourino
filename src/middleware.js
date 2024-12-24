import { NextResponse } from "next/server";

export function middleware(req) {
  // بررسی وجود توکن یا کوکی احراز هویت
  const token = req.cookies.get("accessToken"); // فرض: توکن احراز هویت در کوکی ذخیره شده است

  // اگر توکن وجود نداشته باشد، کاربر را به صفحه لاگین هدایت کنید
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // اگر کاربر مجاز است، ادامه دهید
  return NextResponse.next();
}

// تنظیم مسیرهایی که باید Middleware اجرا شود
export const config = {
  matcher: ["/profile/:path*", "/cart/:path*"], // مسیرهایی که نیاز به احراز هویت دارند
};
