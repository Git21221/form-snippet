import * as React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";

/**
 * @typedef {Object} ButtonDropdownProps
 * @property {string[]} options - The options for the ButtonDropdown component
 * @property {React.CSSProperties} [sx] - custom style for the ButtonDropdown component
 */

export type ButtonDropdownProps = {
  options: string[];
  sx?: React.CSSProperties;
};

const ButtonDropdown = ({ options, sx }: ButtonDropdownProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <ButtonGroup ref={anchorRef}>
        <Button>{options[selectedIndex]}</Button>
        <Button
          onClick={handleToggle}
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
        >
          <IoMdArrowDropdown />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ ...sx, zIndex: 4 }}
        open={open}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(e) => handleMenuItemClick(e, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export { ButtonDropdown };
