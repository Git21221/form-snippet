import * as React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const UploadButton = styled(IconButton)({
  width: 100,
  height: 100,
  borderRadius: "50%",
  backgroundColor: "#f0f0f0",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.3s",

  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
});

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <UploadButton component="label">
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={handleImageChange}
        />
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        ) : (
          <PhotoCamera />
        )}
      </UploadButton>
      <Typography variant="caption" sx={{ mt: 1 }}>
        Upload Image
      </Typography>
    </Box>
  );
};

export default ImageUploader;
