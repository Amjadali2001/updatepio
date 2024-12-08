"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Receipt, Building2, Mail, Phone, DollarSign, Download, Plus } from "lucide-react";

const invoiceTemplates = [
  {
    id: 1,
    name: "Standard Invoice",
    type: "Hourly",
    lastModified: "2024-03-01",
    status: "Active",
  },
  {
    id: 2,
    name: "Project Invoice",
    type: "Fixed",
    lastModified: "2024-02-28",
    status: "Active",
  },
  {
    id: 3,
    name: "Consulting Invoice",
    type: "Hourly + Fixed",
    lastModified: "2024-02-25",
    status: "Draft",
  },
];

export default function InvoicePage() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Receipt className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Company Invoice Details</h3>
            <p className="text-sm text-muted-foreground">
              Information that appears on your invoices
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" placeholder="Enter company name" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="Enter company address" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
              <Input id="tax-id" placeholder="Enter tax ID" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Billing Email</Label>
              <Input id="email" type="email" placeholder="Enter billing email" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter phone number" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="currency">Default Currency</Label>
              <select
                id="currency"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="payment-terms">Payment Terms</Label>
              <select
                id="payment-terms"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              >
                <option value="7">Net 7</option>
                <option value="15">Net 15</option>
                <option value="30">Net 30</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium">Invoice Templates</h3>
            <p className="text-sm text-muted-foreground">
              Manage your invoice templates
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Template Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiceTemplates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="font-medium">{template.name}</TableCell>
                <TableCell>{template.type}</TableCell>
                <TableCell>{template.lastModified}</TableCell>
                <TableCell>{template.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Separator />

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}