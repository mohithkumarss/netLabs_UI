"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StatusIndicator } from "./statusIndicator";
import VerticalTimeline from "./timeline";
import Table from "./table";

export default function InputPopup() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted");
    setOpen(false);
  };

  const stages: {
    title: string;
    description: string;
    status: "current" | "pending" | "completed";
  }[] = [
    {
      title: "Invoice Created",
      description: "The invoice has been created.",
      status: "completed",
    },
    {
      title: "Invoice Sent",
      description: "The invoice has been sent to the customer.",
      status: "completed",
    },
    {
      title: "Payment Received",
      description: "The payment has been received.",
      status: "current",
    },
    {
      title: "Shipped",
      description: "The items have been shipped.",
      status: "pending",
    },
    {
      title: "Delivered",
      description: "The items have been delivered.",
      status: "pending",
    },
    {
      title: "Invoicing Completed",
      description: "The invoicing process is completed.",
      status: "pending",
    },
    {
      title: "Feedback Received",
      description: "Feedback has been received from the customer.",
      status: "pending",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Popup</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[94%] p-6 bg-white shadow-lg rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex text-2xl mb-6 font-bold text-gray-800 justify-between">
            Invoice #12345
            <StatusIndicator status="active" />
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-between">
            <div className="flex flex-col">
              {/* Left Side */}
              <div className="flex w-[42vw] justify-between pr-12">
                <div className="space-y-4 mr-5 w-[12vw]">
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="vendor-name"
                    >
                      Vendor Name
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="vendor-name"
                      placeholder="Vendor Name"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="vendor-address"
                    >
                      Vendor Address
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="vendor-address"
                      placeholder="Vendor Address"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="customer-gst"
                    >
                      Customer GST
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="customer-gst"
                      placeholder="Customer GST"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="invoice-number"
                    >
                      Invoice Number
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="invoice-number"
                      placeholder="Invoice Number"
                    />
                  </div>
                </div>
                {/* Right Side */}
                <div className="space-y-4 mr-5 w-[12vw]">
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="supplier-gst"
                    >
                      Supplier GST
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="supplier-gst"
                      placeholder="Supplier GST"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="taxable-amount"
                    >
                      Taxable Amount
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="taxable-amount"
                      placeholder="Taxable Amount"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="invoice-date"
                    >
                      Invoice Date
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="invoice-date"
                      placeholder="Invoice Date"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="extraction-date"
                    >
                      Extraction Date & Time
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="extraction-date"
                      placeholder="Extraction Date & Time"
                    />
                  </div>
                </div>
                <div className="space-y-4 w-[12vw]">
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="po-number"
                    >
                      PO Number
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="po-number"
                      placeholder="PO Number"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="total-amount"
                    >
                      Total Amount
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="total-amount"
                      placeholder="Total Amount"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="vendor-id"
                    >
                      Vendor ID
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="vendor-id"
                      placeholder="Vendor ID"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="department-code"
                    >
                      Department Code
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="department-code"
                      placeholder="Department Code"
                    />
                  </div>
                </div>
              </div>
              <Table />
            </div>
            {/* GST Info */}
            <h3 className="absolute text-lg font-semibold -rotate-90 mt-[12%] ml-[36.5vw]">
              Supplier GST Information
            </h3>
            <div className="flex flex-col space-y-6">
              <div className="flex">
                {/* Left Column */}
                <div className="space-y-4 mr-8 ml-10">
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="business-name"
                    >
                      Business Name
                    </Label>
                    <Input
                      className="custom-placeholder "
                      id="business-name"
                      placeholder="Business Name"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="entity-type"
                    >
                      Entity Type
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="entity-type"
                      placeholder="Entity Type"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label className="font-semibold text-xs" htmlFor="pan">
                      PAN
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="pan"
                      placeholder="PAN"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <Label className="font-semibold text-xs" htmlFor="pincode">
                      Pincode
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="pincode"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="registration-date"
                    >
                      Registration Date
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="registration-date"
                      placeholder="Registration Date"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <Label
                      className="font-semibold text-xs"
                      htmlFor="registration-type"
                    >
                      Registration Type
                    </Label>
                    <Input
                      className="custom-placeholder"
                      id="registration-type"
                      placeholder="Registration Type"
                    />
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="space-y-6 ml-10">
                <div className="flex flex-col space-y-1 mb-4">
                  <Label
                    className="font-semibold text-xs"
                    htmlFor="review-comments"
                  >
                    Reviewer Comments
                  </Label>
                  <Textarea
                    id="review-comments"
                    placeholder="Enter reviewer comments"
                    className="h-[7.5vh] custom-placeholder"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label
                    className="font-semibold text-xs"
                    htmlFor="approve-comments"
                  >
                    Approver Comments
                  </Label>
                  <Textarea
                    id="approve-comments"
                    placeholder="Enter approver comments"
                    className="h-[7.5vh] custom-placeholder"
                  />
                </div>
              </div>
            </div>
            <VerticalTimeline stages={stages} />
          </div>

          <Button
            type="button"
            className="w-full bg-blue-800 text-white hover:bg-blue-900"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
