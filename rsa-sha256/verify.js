const jwt = require('jsonwebtoken');
const fs = require('fs');
var token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0d2l0dGVyX2FjY291bnQiOiJAZGVyaWNvcF8iLCJpYXQiOjE1NjkxODI4MTUsImV4cCI6MTU2OTE4NjQxNSwiYXVkIjoiMDc4YjE3NTAtZGQ3NC0xMWU5LThhMzQtMmEyYWUyZGJjY2U0In0.W8VfwOu_zGUpp95wdHCh5BFMSFj5uxXoDzuzHHInS3G8BbNLTRBp8KxWj3b_fWn6UA6ZxDSdLOKhB4DNp9IM19LeHSqi7Sj42zanCNgvLyVM4rBkAz2iIeSHRxvV1Ok2atLx8_M826LtaZCrAtlu9FEbvWXPvmWT4bhu4-D5KsaGP8Phg9n-Wt1w89zRyckv1dHlFNOXapiGExkYhCHUADSz5vwpEIktKYPWKISfWGYxVROxHDtx3F_tWGqPcaDay_rRKWV3zgtuZ9o327T2mDsLhhTZ3vFgW0O1ry0W4addh-D6wd_slK9ZlNOSWZHHyXnKAH2FhoWFJRhEpZA90p8URJBPSkna_LNj2hIrjoqEoCNzCkhugSD4CQMCsT_vNOd_-Lj97MExpe-ATkox_2DEhs08r6S5hOd1R0XGLdsfp42I6BezOJHNgLhE3mze3Lrox08M6UwjWftGTaLKyLMXzDMw-mSB4N_a3ilZctofkzv60XOdwrwHrLM5OAL0DU2I1QoKo8ds_doXAnkzvpddZV6IHEjvpij4IQ50SG5oma_id2za9kExoNPe_vVcGN00HMCecCEIw7GvdpRDnfFoOelyUj3GwU-lmm46V8X7-vWfmlykhG439tb-mhkIDhpHSgQHU-HnoAg1ujKh5hCwEA-MBWzgVCJlZrD306Y`;

const publicKey = fs.readFileSync('jwtRS256.key.pub');
jwt.verify(
  token,
  publicKey,
  { algorithm: 'RS256', audience: '078b1750-dd74-11e9-8a34-2a2ae2dbcce4' },
  (err, decoded) => {
    if (err) throw new Error('Invalid token');
    console.log(decoded.twitter_account);
  }
);
