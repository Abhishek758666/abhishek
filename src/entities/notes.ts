import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity()
export class Notes {
	@PrimaryColumn("uuid")
	id!: string;

	@Column({ type: "text", nullable: true })
	image!: string;

	@Column({ type: "text", nullable: true })
	name!: string;

	@Column({ type: "text", nullable: true })
	message!: string;

	@Column({ default: false, type: "boolean" })
	verified!: boolean;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
