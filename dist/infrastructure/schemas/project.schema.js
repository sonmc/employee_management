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
exports.Project = void 0;
const typeorm_1 = require("typeorm");
const user_schema_1 = require("./user.schema");
const base_schema_1 = require("./base.schema");
const kanban_schema_1 = require("./kanban.schema");
let Project = class Project extends base_schema_1.BaseEntity {
    setUsers(users) {
        this.users = users;
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Project.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Project.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kanban_schema_1.Kanban, (k) => k.project, {
        eager: true,
    }),
    __metadata("design:type", Array)
], Project.prototype, "kanbans", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_schema_1.User, (user) => user.projects),
    (0, typeorm_1.JoinTable)({
        name: 'users_projects',
        joinColumn: { name: 'project_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'user_id' },
    }),
    __metadata("design:type", Array)
], Project.prototype, "users", void 0);
Project = __decorate([
    (0, typeorm_1.Entity)({ name: 'projects' })
], Project);
exports.Project = Project;
//# sourceMappingURL=project.schema.js.map