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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const base_schema_1 = require("./base.schema");
const user_schema_1 = require("./user.schema");
const kanban_column_schema_1 = require("./kanban_column.schema");
let Task = class Task extends base_schema_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "estimated_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "estimated_end", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => kanban_column_schema_1.KanbanColumn, (p) => p.tasks),
    __metadata("design:type", kanban_column_schema_1.KanbanColumn)
], Task.prototype, "kanban_column", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_schema_1.User, (users) => users.projects),
    (0, typeorm_1.JoinTable)({
        name: 'users_tasks',
        joinColumn: { name: 'task_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'user_id' },
    }),
    __metadata("design:type", Array)
], Task.prototype, "users", void 0);
Task = __decorate([
    (0, typeorm_1.Entity)({ name: 'tasks' })
], Task);
exports.Task = Task;
//# sourceMappingURL=task.schema.js.map