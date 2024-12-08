"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function QRCode() {
  return (
    <div className="p-6 space-y-6">
      <h3 className="text-lg font-medium text-center">
        Easily record your time in the app
      </h3>
      
      <div className="flex justify-center">
        <div className="w-48 h-48 bg-white p-4">
          {/* Replace with actual QR code */}
          <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            QR Code
          </div>
        </div>
      </div>

      <div className="space-y-4 text-sm text-muted-foreground">
        <ol className="list-decimal list-inside space-y-2">
          <li>Download the TimePio app from the Google Play Store or Apple App Store.</li>
          <li>Open app.</li>
          <li>Press "Use code" and scan the QR code.</li>
        </ol>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="outline" className="gap-2">
          <Image
            src="/google-play.png"
            alt="Get it on Google Play"
            width={24}
            height={24}
          />
          Google Play
        </Button>
        <Button variant="outline" className="gap-2">
          <Image
            src="/app-store.png"
            alt="Download on App Store"
            width={24}
            height={24}
          />
          App Store
        </Button>
      </div>
    </div>
  );
}