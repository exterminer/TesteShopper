import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./products.entities"; // Importe a entidade Product, se necessário

@Entity("packs")
export class Pack {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pack_id: number;

    @Column()
    product_id: number;

    @Column()
    qty: number;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "pack_id" })
    pack: Product;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "product_id" })
    product: Product;
}
