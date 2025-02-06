
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sql } from "@vercel/postgres";

import { redirect } from "next/navigation";


export default async function StudentRegistrationForm() {
 async function registerBook(formData: FormData) {
  'use server'
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  await sql`INSERT INTO  books (title, description) VALUES (${title}, ${description})` 
  console.log('Estudante registrado:', { title, description })
 
  redirect('/dashboard/book/list');
 
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Cadastro de livros</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={registerBook} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Título</Label>
              <Input type="text" id="name" name="title" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">DEscrição</Label>
              <Input type="text" id="email" name="description" required />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

