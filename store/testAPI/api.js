import axios from "axios"
const testAPI = axios.create({
  baseURL: "https://test123-39873-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return testAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return testAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return testAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return testAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return testAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return testAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return testAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return testAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_social_auth_apple_login_create(payload) {
  return testAPI.post(`/modules/social-auth/apple/login/`, payload.data)
}
function modules_social_auth_google_login_create(payload) {
  return testAPI.post(`/modules/social-auth/google/login/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function modules_social_auth_apple_connect_create(payload) {
  return testAPI.post(`/modules/social-auth/apple/connect/`, payload.data)
}
function modules_social_auth_facebook_login_create(payload) {
  return testAPI.post(`/modules/social-auth/facebook/login/`, payload.data)
}
function modules_social_auth_google_connect_create(payload) {
  return testAPI.post(`/modules/social-auth/google/connect/`, payload.data)
}
function modules_social_auth_socialaccounts_list(payload) {
  return testAPI.get(`/modules/social-auth/socialaccounts/`)
}
function rest_auth_registration_verify_email_create(payload) {
  return testAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function modules_social_auth_facebook_connect_create(payload) {
  return testAPI.post(`/modules/social-auth/facebook/connect/`, payload.data)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return testAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_google_login_create,
  rest_auth_password_reset_confirm_create,
  modules_social_auth_apple_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_socialaccounts_list,
  rest_auth_registration_verify_email_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_socialaccounts_disconnect_create
}
