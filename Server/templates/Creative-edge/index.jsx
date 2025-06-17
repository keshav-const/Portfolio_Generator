import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Stack,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const CreativeEdgeTemplate = ({
  name = "John Doe",
  title = "Full Stack Developer",
  github = "https://github.com/",
  projects = [],
  socials = [],
  contact = { email: "example@example.com" },
}) => {
  return (
    <>
      {/* Custom Font Injection */}
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            src: url('./fonts/Inter-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }

          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <Typography variant="h5" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((proj, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  elevation={4}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {proj.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {proj.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      href={proj.link}
                      target="_blank"
                      color="primary"
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <Typography variant="h5" gutterBottom>
            Connect
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {socials.map((soc, i) => (
              <Chip
                key={i}
                label={soc.platform}
                component="a"
                href={soc.link}
                clickable
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ marginTop: "2rem" }}
        >
          <Typography variant="body2" align="center" color="text.secondary">
            Contact me at:{" "}
            <Link href={`mailto:${contact.email}`} color="primary">
              {contact.email}
            </Link>
          </Typography>
        </motion.div>
      </Container>
    </>
  );
};

export default CreativeEdgeTemplate;
