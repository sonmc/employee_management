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
exports.KanbanColumn = void 0;
const typeorm_1 = require("typeorm");
const base_schema_1 = require("./base.schema");
const kanban_schema_1 = require("./kanban.schema");
const task_schema_1 = require("./task.schema");
let KanbanColumn = class KanbanColumn extends base_schema_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KanbanColumn.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], KanbanColumn.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_schema_1.Task, (k) => k.kanban_column, {
        eager: true,
    }),
    __metadata("design:type", Array)
], KanbanColumn.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kanban_schema_1.Kanban, (p) => p.kanban_columns),
    __metadata("design:type", kanban_schema_1.Kanban)
], KanbanColumn.prototype, "kanban", void 0);
KanbanColumn = __decorate([
    (0, typeorm_1.Entity)({ name: 'kanban_columns' })
], KanbanColumn);
exports.KanbanColumn = KanbanColumn;
//# sourceMappingURL=kanban_column.schema.js.map