import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";


export default async function list() {
 
    const { rows }= await sql`SELECT * FROM books`

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50%]">Titulo do livro</TableHead>
                        <TableHead>DEscrição</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((book) => (
                        <TableRow key={book.id}>
                            <TableCell className="font-medium">{book.title}</TableCell>
                            <TableCell>{book.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}