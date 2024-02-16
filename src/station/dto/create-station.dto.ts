import { IsIP, IsInt, IsNotEmpty, IsOptional, Max, Min } from "class-validator";

export class CreateStationDto {
    @IsNotEmpty({ message: 'A lokáció mező nem lehet üres' })
    location: string;

    @IsIP("4", { message: 'Érvénytelen IP-cím formátum' })
    ipAddress: string;

    @IsInt({ message: 'Az akkumulátor kapacitása egész számnak kell lennie' })
    @Min(1, { message: 'Az akkumulátor kapacitása legalább 1 mAh' })
    batteryCapacity: number;

    @IsOptional()
    @IsInt({ message: 'Az akkumulátor töltöttségének egész számnak kell lennie' })
    @Min(0, { message: 'Az akkumulátor töltöttsége nem lehet kisebb, mint 0%' })
    @Max(100, { message: 'Az akkumulátor töltöttsége nem lehet nagyobb, mint 100%' })
    batteryCharge: number;
}
