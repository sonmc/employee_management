"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kanban = void 0;
const typeorm_1 = require("typeorm");
const base_schema_1 = require("./base.schema");
const kanban_column_schema_1 = require("./kanban_column.schema");
const project_schema_1 = require("./project.schema");
const user_schema_1 = require("./user.schema");
let Kanban = class Kanban extends base_schema_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.name = '';
        this.kanban_columns = [];
        this.users = [];
        this.project = new project_schema_1.Project();
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Kanban.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kanban_column_schema_1.KanbanColumn, (k) => k.kanban, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Kanban.prototype, "kanban_columns", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_schema_1.User, (users) => users.kanbans),
    (0, typeorm_1.JoinTable)({
        name: 'users_kanbans',
        joinColumn: { name: 'kanban_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'user_id' },
    }),
    __metadata("design:type", Array)
], Kanban.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_schema_1.Project, (p) => p.kanbans),
    __metadata("design:type", project_schema_1.Project)
], Kanban.prototype, "project", void 0);
Kanban = __decorate([
    (0, typeorm_1.Entity)({ name: 'kanbans' })
], Kanban);
exports.Kanban = Kanban;
//# sourceMappingURL=kanban.schema.js.map