# Fleet Schema

> npx prisma generate

## Create `fleet` table

```sql
CREATE TABLE "fleet" (
"id" SERIAL NOT NULL,
"name" VARCHAR UNIQUE NOT NULL,
"email" VARCHAR UNIQUE NOT NULL,
"password" VARCHAR NOT NULL,
"phone" VARCHAR,
"address" VARCHAR,
"country" VARCHAR,
"city" VARCHAR,
"postal_code" VARCHAR,
"website" VARCHAR,
"otp" INTEGER,
"verified_at" TIMESTAMP(3),
"created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" TIMESTAMP(3),
"deleted_at" TIMESTAMP(3),

CONSTRAINT "fleet_pkey" PRIMARY KEY ("id")
);
```

```prisma
model fleet {
  id          Int          @id @default(autoincrement())
  name        String       @unique @db.VarChar
  email       String       @unique @db.VarChar
  password    String       @db.VarChar
  phone       String?      @db.VarChar
  address     String?      @db.VarChar
  country     String?      @db.VarChar
  city        String?      @db.VarChar
  postal_code String?      @db.VarChar
  website     String?      @db.VarChar
  otp         Int?         @db.Integer
  verified_at DateTime?
  created_at  DateTime     @default(now())
  updated_at  DateTime?
  deleted_at  DateTime?
  fleet_cars  fleet_cars[]
}
```

## Create `fleet_cars` table

```sql
CREATE TABLE "fleet_cars" (
"id" SERIAL NOT NULL,
"fleet_id" INTEGER NOT NULL,
"car_model_id" INTEGER NOT NULL,
"model_year" INTEGER,
"plate_number" VARCHAR,
"notes" JSONB,
"created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updated_at" TIMESTAMP(3),
"deleted_at" TIMESTAMP(3),

CONSTRAINT "fleet_cars_pkey" PRIMARY KEY ("id")
);
```

```prisma
model fleet_cars {
  id           Int       @id @default(autoincrement())
  fleet_id     Int
  fleet        fleet     @relation(fields: [fleet_id], references: [id])
  car_model_id Int
  car_model    car_model @relation(fields: [car_model_id], references: [id])
  model_year   Int?      @db.Integer
  plate_number String?   @db.VarChar
  notes        Json?
  created_at   DateTime  @default(now())
  updated_at   DateTime?
  deleted_at   DateTime?
}
```

#### Contraints

```sql
ALTER TABLE "fleet_cars" ADD CONSTRAINT "fleet_cars_fleet_id_fkey" FOREIGN KEY ("fleet_id") REFERENCES "fleet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "fleet_cars" ADD CONSTRAINT "fleet_cars_car_model_id_fkey" FOREIGN KEY ("car_model_id") REFERENCES "car_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
```

#### Miscellaneous

```sql
DROP TABLE "fleet"

ALTER TABLE "car_service" ADD maintenance_progress JSONB;

ALTER TABLE "car_service" DROP maintenanceprogress;

ALTER TABLE "insurance" MODIFY COLUMN "status" ENUM("UNINSURED","PAID","INSURED","CANCELLED")
```
