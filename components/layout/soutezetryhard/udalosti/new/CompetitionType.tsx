import React from 'react'
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

const CompetitionType = ({form, setPreview__Type}: {form: any, setPreview__Type: any}) => {
    return (
        <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Typ</FormLabel>
                    <Select onValueChange={(event) => {
                        field.onChange(event)
                        setPreview__Type(event)
                    }} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Zvolte typ události, kterou chcete vytvořit" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="jednokolová soutěž">Jednokolová soutěž</SelectItem>
                            <SelectItem value="vícekolová soutěž">Vícekolová soutěž</SelectItem>
                        </SelectContent>
                    </Select>
                    <FormDescription>
                        Typ události rozvíjí formulář dále
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
export default CompetitionType
