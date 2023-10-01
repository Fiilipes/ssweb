import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const CompetitionSoutezType = ({form, setPreview__CompetitionType}: {form: any, setPreview__CompetitionType: any}) => {
    return (
        <FormField
            control={form.control}
            name="competitionType"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Typ soutěže</FormLabel>
                    <Select onValueChange={(event) => {
                        field.onChange(event)
                        setPreview__CompetitionType(event)
                    }} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Zvolte typ soutěže, kterou chcete vytvořit" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="jednokolová soutěž">Jednokolová soutěž</SelectItem>
                            <SelectItem value="vícekolová soutěž">Vícekolová soutěž</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormDescription>
                        Typ soutěže rozvíjí formulář dále
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CompetitionSoutezType
