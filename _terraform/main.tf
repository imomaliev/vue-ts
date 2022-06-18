module "github" {
  # https://github.com/imomaliev/terraform-registry/tree/main/modules/github
  source = "git@github.com:imomaliev/terraform-registry.git//modules/github"

  token               = var.github_token
  is_template         = true
  project_name        = "Vue TS"
  project_description = "Vite + Vue + TypeScript template"
  project_url         = "https://imomaliev.github.io/vue-ts/"
  topics              = ["typescript", "vue", "eslint", "prettier", "jest", "vite", "pre-commit"]
}
