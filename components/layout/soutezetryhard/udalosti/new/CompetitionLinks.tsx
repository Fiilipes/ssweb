import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export function CompetitionLinks({competitionLinks, setCompetitionLinks, linksRef}: {competitionLinks: any, setCompetitionLinks: any, linksRef:any }) {
    return (
        <Dialog>
            <DialogTrigger asChild >
                <Button variant="outline" className={"h-[6vw]"}>Přidat odkaz</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Přidat odkaz</DialogTitle>
                    <DialogDescription>
                        Přidejte odkaz na stránku týkající se této události.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Odkaz
                        </Label>
                        <Input id="link" placeholder={"Webová adresa..."} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Název
                        </Label>
                        <Input id="label" placeholder={"Název webu"} className="col-span-3" />
                    </div>
                </div>
                <DialogPrimitive.Close>
                    <DialogFooter>
                        <Button type="submit" disabled={
                            (document.getElementById("link") as HTMLInputElement)?.value === "" ||
                            (document.getElementById("label") as HTMLInputElement)?.value === ""
                        } onClick={() => {
                            // @ts-ignore
                            setCompetitionLinks([...competitionLinks, {
                                link: (document.getElementById("link") as HTMLInputElement)?.value,
                                label: (document.getElementById("label") as HTMLInputElement)?.value
                            }])
                            linksRef.current.style.opacity = "1"
                        }}>Přidat odkaz</Button>
                    </DialogFooter>
                </DialogPrimitive.Close>

            </DialogContent>
        </Dialog>
    )
}
