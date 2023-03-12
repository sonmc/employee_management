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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const base_schema_1 = require("./base.schema");
const project_schema_1 = require("./project.schema");
const role_schema_1 = require("./role.schema");
const workload_schema_1 = require("./workload.schema");
const vacation_schema_1 = require("./vacation.schema");
const kanban_schema_1 = require("./kanban.schema");
const task_schema_1 = require("./task.schema");
const bcrypt_service_1 = require("../services/bcrypt.service");
let User = class User extends base_schema_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.username = '';
        this.email = '';
        this.phone_number = '';
        this.password = '';
        this.status = 0;
        this.gender = false;
        this.avatar = '';
        this.dob = new Date();
        this.hash_refresh_token = '';
        this.workloads = [];
        this.roles = [];
        this.projects = [];
        this.vacations = [];
        this.tasks = [];
        this.kanbans = [];
    }
    async setPassword(password) {
        this.password = await (0, bcrypt_service_1.hash)(password || this.password);
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], User.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "last_login", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "hash_refresh_token", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], User.prototype, "setPassword", null);
__decorate([
    (0, typeorm_1.OneToMany)(() => workload_schema_1.Workload, (workload) => workload.user, {
        eager: true,
    }),
    __metadata("design:type", Array)
], User.prototype, "workloads", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_schema_1.Role, (role) => role.users),
    (0, typeorm_1.JoinTable)({
        name: 'users_roles',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => project_schema_1.Project, (project) => project.users),
    (0, typeorm_1.JoinTable)({
        name: 'users_projects',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'project_id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => vacation_schema_1.Vacation, (v) => v.users),
    (0, typeorm_1.JoinTable)({
        name: 'users_vacations',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'vacation_id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "vacations", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => task_schema_1.Task, (v) => v.users),
    (0, typeorm_1.JoinTable)({
        name: 'users_tasks',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'task_id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => kanban_schema_1.Kanban, (v) => v.users),
    (0, typeorm_1.JoinTable)({
        name: 'users_kanbans',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'kanban_id' },
    }),
    __metadata("design:type", Array)
], User.prototype, "kanbans", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=user.schema.js.map