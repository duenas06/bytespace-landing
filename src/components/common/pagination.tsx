import { Center, HStack, Icon, Text, type StackProps } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = Omit<StackProps, "onChange"> & {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
};

export function Pagination({ page, pageCount, onChange, ...rest }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <HStack as="nav" aria-label="Pagination" justify="center" gap="20px" {...rest}>
      <PaginationArrow
        label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ChevronLeft />
      </PaginationArrow>

      <HStack gap="20px">
        {pages.map((entry) => (
          <Text
            key={entry}
            asChild
            textStyle="label.l"
            fontWeight={entry === page ? "medium" : "bold"}
            color={entry === page ? "fg.subtle" : "fg"}
            cursor="pointer"
            _hover={{ color: entry === page ? "fg.subtle" : "fg.brand" }}
          >
            <button
              type="button"
              aria-current={entry === page ? "page" : undefined}
              onClick={() => onChange(entry)}
            >
              {entry}
            </button>
          </Text>
        ))}
      </HStack>

      <PaginationArrow
        label="Next page"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
      >
        <ChevronRight />
      </PaginationArrow>
    </HStack>
  );
}

type PaginationArrowProps = {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function PaginationArrow({ label, disabled, onClick, children }: PaginationArrowProps) {
  return (
    <Center
      asChild
      boxSize="48px"
      borderRadius="full"
      borderWidth="1px"
      borderColor="border.emphasized"
      color="fg"
      cursor="pointer"
      transitionProperty="background-color, border-color, opacity"
      transitionDuration="fast"
      _hover={{ bg: "ink.50" }}
      _disabled={{ opacity: 0.4, cursor: "not-allowed", _hover: { bg: "transparent" } }}
    >
      <button type="button" aria-label={label} disabled={disabled} onClick={onClick}>
        <Icon asChild boxSize="20px">
          {children}
        </Icon>
      </button>
    </Center>
  );
}
